import "./Slide.css";
import { Link } from "react-router-dom";

// One slide
const Slide = (props) => {
    return (
        <div className={props.active ? "slide active" : "slide"}>
            <img src={props.image} alt={props.name} />
            <div>
                <span className="tag">{props.category.toUpperCase()}</span>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <Link to={props.to} className="btn btn-primary">View {props.name}</Link>
            </div>
        </div>
    );
};

export default Slide;
