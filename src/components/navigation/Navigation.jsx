import "./Navigation.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// Menu
const Navigation = () => {
    // Menu open or closed
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <nav className="main-nav">
            <button
                type="button"
                className={open ? "nav-toggle open" : "nav-toggle"}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={open}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={open ? "open" : ""}>
                <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/directory" onClick={closeMenu}>AI Directory</NavLink></li>
                <li><NavLink to="/help" onClick={closeMenu}>Help</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                <li><Link to="/directory" className="nav-cta" onClick={closeMenu}>Explore Directory</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
