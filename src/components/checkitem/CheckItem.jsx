import "./CheckItem.css";

// Check item
const CheckItem = (props) => {
    return (
        <div className="check-item">
            <span>&#10003;</span>
            <p>{props.text}</p>
        </div>
    );
};

export default CheckItem;
