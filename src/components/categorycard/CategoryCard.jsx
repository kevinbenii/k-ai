import "./CategoryCard.css";
import { Link } from "react-router-dom";

// Category card
const CategoryCard = (props) => {
    return (
        <Link to={props.to} className="category-card">
            <div className="icon-box"><span className="icon-dot"></span></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </Link>
    );
};

export default CategoryCard;
