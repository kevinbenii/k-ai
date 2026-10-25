import "./InfoCard.css";

// Info card
const InfoCard = (props) => {
    return (
        <div className="info-card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default InfoCard;
