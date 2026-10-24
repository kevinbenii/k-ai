import "./StepCard.css";

// Step card
const StepCard = (props) => {
    return (
        <div className="step-card">
            <div className="step-num">{props.number}</div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default StepCard;
