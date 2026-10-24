import "./ToolCard.css";
import { Link } from "react-router-dom";

// Tool card
const ToolCard = (props) => {
    return (
        <Link to={props.to} className="tool-card">
            <img src={props.image} alt={props.name} />
            <span className="tool-tag">{props.category}</span>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p className="tool-meta">{props.price} &middot; {props.platform}</p>
        </Link>
    );
};

export default ToolCard;
