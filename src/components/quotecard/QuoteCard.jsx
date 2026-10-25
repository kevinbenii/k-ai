import "./QuoteCard.css";

// Quote card
const QuoteCard = (props) => {
    return (
        <div className="quote-card">
            <p>“{props.quote}”</p>
            <span>— {props.name}</span>
        </div>
    );
};

export default QuoteCard;
