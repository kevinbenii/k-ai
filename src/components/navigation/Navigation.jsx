import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";

// Menu
const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/directory">AI Directory</NavLink></li>
                <li><NavLink to="/help">Help</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><Link to="/directory" className="nav-cta">Explore Directory</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
