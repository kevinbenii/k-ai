import "./DetailSidebar.css";
import { Link } from "react-router-dom";

// Sidebar
const DetailSidebar = (props) => {
    return (
        <nav className="detail-sidebar">
            <span>DIRECTORY</span>
            <Link to="/education" className={props.current === "education" ? "current" : ""}>Education and Research</Link>
            <Link to="/coding" className={props.current === "coding" ? "current" : ""}>Coding and Technology</Link>
            <Link to="/business" className={props.current === "business" ? "current" : ""}>Business and Productivity</Link>
            <Link to="/writing" className={props.current === "writing" ? "current" : ""}>Writing and Creativity</Link>
        </nav>
    );
};

export default DetailSidebar;
