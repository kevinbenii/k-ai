import "./ValueCard.css";

// Value card
const ValueCard = (props) => {
    return (
        <div className="value-card">
            <div className="icon-box"><span className="icon-dot"></span></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default ValueCard;
