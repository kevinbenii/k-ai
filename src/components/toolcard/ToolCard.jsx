import "./ToolCard.css";

// Tool card (click to see details)
const ToolCard = (props) => {
    return (
        <button type="button" className="tool-card" onClick={props.onClick}>
            <img src={props.image} alt={props.name} />
            <span className="tool-tag">{props.category}</span>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p className="tool-meta">{props.price} &middot; {props.platform}</p>
            <span className="tool-more">View details &rarr;</span>
        </button>
    );
};

export default ToolCard;
