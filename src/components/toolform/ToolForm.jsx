import "./ToolForm.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

// Categories (same as the server)
const categories = [
    "Education and Research",
    "Coding and Technology",
    "Business and Productivity",
    "Writing and Creativity"
];

// Empty form
const emptyForm = { name: "", category: "", description: "", price: "", platform: "", img: null };

// Check the form (same rules as the server's Joi validation)
const checkForm = (form, imageNeeded) => {
    const name = form.name.trim();
    const description = form.description.trim();
    const price = form.price.trim();
    const platform = form.platform.trim();

    if (name.length < 2 || name.length > 30) return "Name must be 2 to 30 characters.";
    if (!categories.includes(form.category)) return "Please choose a category.";
    if (description.length < 5 || description.length > 120) return "Description must be 5 to 120 characters.";
    if (price.length < 2 || price.length > 30) return "Price must be 2 to 30 characters.";
    if (platform.length < 2 || platform.length > 30) return "Platform must be 2 to 30 characters.";
    if (imageNeeded && !form.img) return "Please choose an image for the tool.";
    return "";
};

// Add or edit a tool (editing when a tool is passed in)
const ToolForm = (props) => {
    const editing = props.tool ? true : false;

    // Start empty, or filled in with the tool being edited
    const [form, setForm] = useState(editing ? {
        name: props.tool.name,
        category: props.tool.category,
        description: props.tool.description,
        price: props.tool.price,
        platform: props.tool.platform,
        img: null
    } : emptyForm);

    // Message for the user (and if it worked)
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("");

    // Text fields
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    // Image field
    const handleImage = (event) => {
        setForm({ ...form, img: event.target.files[0] || null });
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        // Client side validation (image only needed when adding)
        const problem = checkForm(form, !editing);
        if (problem) {
            setStatus("error");
            setResult(problem);
            return;
        }

        setStatus("");
        setResult(editing ? "Saving changes..." : "Adding tool...");

        const formData = new FormData();
        formData.append("name", form.name.trim());
        formData.append("category", form.category);
        formData.append("description", form.description.trim());
        formData.append("price", form.price.trim());
        formData.append("platform", form.platform.trim());
        if (form.img) {
            formData.append("img", form.img);
        }

        try {
            let response;
            if (editing) {
                response = await axios.put(props.server + "/api/tools/" + props.tool._id, formData);
                setResult(response.data.name + " was updated!");
            } else {
                response = await axios.post(props.server + "/api/tools", formData);
                setResult(response.data.name + " was added to the directory!");
                setForm(emptyForm);
                event.target.reset();
            }
            setStatus("success");
            props.onSaved(response.data);
        } catch (error) {
            setStatus("error");
            setResult(error.response ? error.response.data : "Sorry, something went wrong. Please try again.");
        }
    };

    // Image preview: new file, or the tool's current image
    let preview = "Preview";
    if (form.img) {
        preview = <img src={URL.createObjectURL(form.img)} alt="Preview" />;
    } else if (editing) {
        preview = <img src={props.server + "/" + props.tool.img_name} alt={props.tool.name} />;
    }

    return createPortal(
        <div className="tool-form-overlay" onClick={props.close}>
            <div className="tool-form" role="dialog" aria-label={editing ? "Edit tool" : "Add a tool"} onClick={(event) => event.stopPropagation()}>
                <button type="button" className="close" onClick={props.close} aria-label="Close">&times;</button>

                <h2>{editing ? "Edit " + props.tool.name : "Add a tool"}</h2>
                <p className="intro">{editing ? "Update this tool's details below." : "Know an AI tool that belongs on K·AI? Add it to the directory."}</p>

                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="tool-name">Tool name</label>
                            <input id="tool-name" name="name" type="text" value={form.name} onChange={handleChange} required minLength="2" maxLength="30" placeholder="Quiz Maker" />
                        </div>
                        <div className="field">
                            <label htmlFor="tool-category">Category</label>
                            <select id="tool-category" name="category" value={form.category} onChange={handleChange} required>
                                <option value="">Choose a category</option>
                                {categories.map((category) => (
                                    <option key={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="tool-description">Description</label>
                        <textarea id="tool-description" name="description" value={form.description} onChange={handleChange} required minLength="5" maxLength="120" placeholder="What does this tool do?"></textarea>
                        <span className="hint">{form.description.length}/120</span>
                    </div>

                    <div className="row">
                        <div className="field">
                            <label htmlFor="tool-price">Price</label>
                            <input id="tool-price" name="price" type="text" value={form.price} onChange={handleChange} required minLength="2" maxLength="30" placeholder="Free to try" />
                        </div>
                        <div className="field">
                            <label htmlFor="tool-platform">Platform</label>
                            <input id="tool-platform" name="platform" type="text" value={form.platform} onChange={handleChange} required minLength="2" maxLength="30" placeholder="Web" />
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="tool-img">{editing ? "New image (optional)" : "Image"}</label>
                        <div className="image-row">
                            <div className="preview">{preview}</div>
                            <input id="tool-img" name="img" type="file" accept="image/*" onChange={handleImage} required={!editing} />
                        </div>
                    </div>

                    <div className="actions">
                        <button type="submit" className="btn btn-primary">{editing ? "Save changes" : "Add tool"}</button>
                        <button type="button" className="btn btn-secondary" onClick={props.close}>Close</button>
                    </div>

                    {result && <p className={"result " + status} role="status">{result}</p>}
                </form>
            </div>
        </div>,
        document.body
    );
};

export default ToolForm;
