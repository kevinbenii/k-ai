import "./Logo.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

// Logo
const Logo = () => {
    return (
        <Link to="/" className="logo">
            <img src={logo} alt="K·AI logo" className="logo-mark" />
            <span className="logo-text">K·AI</span>
        </Link>
    );
};

export default Logo;
