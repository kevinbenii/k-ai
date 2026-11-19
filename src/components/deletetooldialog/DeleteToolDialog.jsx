import "./DeleteToolDialog.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

// Delete a tool (asks first)
const DeleteToolDialog = (props) => {
    const tool = props.tool;

    // Message for the user (and if it worked)
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("");

    const deleteTool = async () => {
        setStatus("");
        setResult("Deleting...");

        try {
            await axios.delete(props.server + "/api/tools/" + tool._id);
            setStatus("success");
            setResult(tool.name + " was deleted.");
            props.onDeleted(tool._id);
        } catch (error) {
            setStatus("error");
            setResult(error.response ? error.response.data : "Sorry, the tool could not be deleted. Please try again.");
        }
    };

    return createPortal(
        <div className="delete-tool-overlay" onClick={props.close}>
            <div className="delete-tool" role="dialog" aria-label={"Delete " + tool.name} onClick={(event) => event.stopPropagation()}>
                <img src={props.server + "/" + tool.img_name} alt={tool.name} />
                <h2>Delete {tool.name}?</h2>
                <p>This removes the tool from the K·AI directory.</p>

                <div className="actions">
                    {status === "success" ? (
                        <button type="button" className="btn btn-primary" onClick={props.close}>Done</button>
                    ) : (
                        <>
                            <button type="button" className="btn btn-danger" onClick={deleteTool}>Delete</button>
                            <button type="button" className="btn btn-secondary" onClick={props.close}>Cancel</button>
                        </>
                    )}
                </div>

                {result && <p className={"result " + status} role="status">{result}</p>}
            </div>
        </div>,
        document.body
    );
};

export default DeleteToolDialog;
