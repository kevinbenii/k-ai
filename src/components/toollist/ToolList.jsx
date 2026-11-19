import "./ToolList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ToolCard from "../toolcard/ToolCard";
import ToolDialog from "../tooldialog/ToolDialog";
import ToolForm from "../toolform/ToolForm";
import DeleteToolDialog from "../deletetooldialog/DeleteToolDialog";

// K·AI server on Render
const server = "https://setup-qe5y.onrender.com";

// Tools loaded from the server
const ToolList = (props) => {
    const [tools, setTools] = useState([]);
    const [message, setMessage] = useState("Loading tools...");

    // Tool that was clicked (null = no dialog)
    const [selected, setSelected] = useState(null);

    // Add a tool form open or closed
    const [showAdd, setShowAdd] = useState(false);

    // Tool being edited or deleted (null = none)
    const [editing, setEditing] = useState(null);
    const [deleting, setDeleting] = useState(null);

    // Get the tools once when the page loads
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(server + "/api/tools");
                setTools(response.data);
                setMessage("");
            } catch (error) {
                setMessage("Sorry, the tools could not be loaded.");
            }
        })();
    }, []);

    // New tool from the server goes into the list right away
    const addTool = (tool) => {
        setTools((current) => [...current, tool]);
    };

    // Edited tool from the server replaces the old one right away
    const updateTool = (updated) => {
        setTools((current) => current.map((tool) => (tool._id === updated._id ? updated : tool)));
    };

    // Deleted tool comes out of the list right away
    const removeTool = (id) => {
        setTools((current) => current.filter((tool) => tool._id !== id));
    };

    // Open the edit form or delete box from the details dialog
    const startEdit = () => {
        setEditing(selected);
        setSelected(null);
    };

    const startDelete = () => {
        setDeleting(selected);
        setSelected(null);
    };

    // Only one category (if given)
    let shown = tools;
    if (props.category) {
        shown = shown.filter((tool) => tool.category === props.category);
    }

    // Only the first few (if given)
    if (props.limit) {
        shown = shown.slice(0, props.limit);
    }

    if (message) {
        return <p className="tool-list-message">{message}</p>;
    }

    return (
        <>
            {shown.map((tool) => (
                <ToolCard
                    key={tool._id}
                    image={server + "/" + tool.img_name}
                    name={tool.name}
                    category={tool.category}
                    description={tool.description}
                    price={tool.price}
                    platform={tool.platform}
                    onClick={() => setSelected(tool)} />
            ))}

            {/* Add a tool card (only where allowed) */}
            {props.canAdd && (
                <button type="button" className="add-tool-card" onClick={() => setShowAdd(true)}>
                    <span className="plus">+</span>
                    <span className="title">Add a tool</span>
                    <span className="text">Share an AI tool with K·AI</span>
                </button>
            )}

            {selected && (
                <ToolDialog
                    tool={selected}
                    image={server + "/" + selected.img_name}
                    onEdit={startEdit}
                    onDelete={startDelete}
                    close={() => setSelected(null)} />
            )}

            {showAdd && (
                <ToolForm
                    server={server}
                    onSaved={addTool}
                    close={() => setShowAdd(false)} />
            )}

            {editing && (
                <ToolForm
                    server={server}
                    tool={editing}
                    onSaved={updateTool}
                    close={() => setEditing(null)} />
            )}

            {deleting && (
                <DeleteToolDialog
                    server={server}
                    tool={deleting}
                    onDeleted={removeTool}
                    close={() => setDeleting(null)} />
            )}
        </>
    );
};

export default ToolList;
