import "./Button.css";
import { Link } from "react-router-dom";

// Button link
const Button = (props) => {
    return (
        <Link to={props.to} className="button">{props.name}</Link>
    );
};

export default Button;
