import "./Logo.css";
import logo from "./images/logo.png";

// Logo
const Logo = () => {
    return (
        <a href="#home" className="logo">
            <img src={logo} alt="K·AI logo" className="logo-mark" />
            <span className="logo-text">K·AI</span>
        </a>
    );
};

export default Logo;
