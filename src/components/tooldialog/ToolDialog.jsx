import "./ToolDialog.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Tool details dialog
const ToolDialog = (props) => {
    const tool = props.tool;

    // Close with the Esc key
    useEffect(() => {
        const onKey = (event) => {
            if (event.key === "Escape") {
                props.close();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [props]);

    return (
        <div className="tool-dialog-overlay" onClick={props.close}>
            {/* Clicks inside the box don't close it */}
            <div className="tool-dialog" role="dialog" aria-label={tool.name} onClick={(event) => event.stopPropagation()}>
                <button type="button" className="close" onClick={props.close} aria-label="Close">&times;</button>

                <img src={props.image} alt={tool.name} />
                <span className="tag">{tool.category.toUpperCase()}</span>
                <h2>{tool.name}</h2>
                <p className="description">{tool.description}</p>

                <div className="stats">
                    <div>
                        <span className="label">PRICE</span>
                        <span className="value">{tool.price}</span>
                    </div>
                    <div>
                        <span className="label">PLATFORM</span>
                        <span className="value">{tool.platform}</span>
                    </div>
                </div>

                <Link to={tool.link} className="btn btn-primary" onClick={props.close}>Learn more &rarr;</Link>
            </div>
        </div>
    );
};

export default ToolDialog;
