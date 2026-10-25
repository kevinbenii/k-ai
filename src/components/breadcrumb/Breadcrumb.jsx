import "./Breadcrumb.css";
import { Link } from "react-router-dom";

// Breadcrumb
const Breadcrumb = (props) => {
    return (
        <div className="breadcrumb container">
            <span>AI DIRECTORY / {props.category.toUpperCase()}</span>
            <Link to={props.to}>&larr; Back to {props.category}</Link>
        </div>
    );
};

export default Breadcrumb;
