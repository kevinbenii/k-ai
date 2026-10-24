import { Link } from "react-router-dom";

// Category circle
const HubNode = (props) => {
    return (
        <Link to={props.to} className="hub-node">
            <circle cx={props.x} cy={props.y} r="20" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" />
            <text x={props.x} y={props.labelY} textAnchor="middle" className="hub-node-label">{props.label}</text>
        </Link>
    );
};

export default HubNode;
