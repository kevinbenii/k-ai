import "./ToolList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ToolCard from "../toolcard/ToolCard";

// K·AI server on Render
const server = "https://setup-qe5y.onrender.com";

// Tools loaded from the server
const ToolList = (props) => {
    const [tools, setTools] = useState([]);
    const [message, setMessage] = useState("Loading tools...");

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
                    to={tool.link}
                    image={server + "/" + tool.img_name}
                    name={tool.name}
                    category={tool.category}
                    description={tool.description}
                    price={tool.price}
                    platform={tool.platform} />
            ))}
        </>
    );
};

export default ToolList;
