import "./FaqItem.css";

// FAQ item
const FaqItem = (props) => {
    return (
        <div className="faq-item">
            <h3>{props.question}</h3>
            <p>{props.answer}</p>
        </div>
    );
};

export default FaqItem;
