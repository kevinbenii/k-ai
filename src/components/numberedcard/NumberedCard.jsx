import "./NumberedCard.css";

// Numbered card
const NumberedCard = (props) => {
    return (
        <div className="numbered-card">
            <span>{props.number}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default NumberedCard;
