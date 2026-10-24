import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

// Footer
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div>
                        <Logo />
                        <p className="footer-tagline">A central website hub for AI tools</p>
                    </div>
                    <div className="footer-col">
                        <span className="footer-col-title">DIRECTORY</span>
                        <Link to="/education">Education and Research</Link>
                        <Link to="/coding">Coding and Technology</Link>
                        <Link to="/business">Business and Productivity</Link>
                        <Link to="/writing">Writing and Creativity</Link>
                    </div>
                    <div className="footer-col">
                        <span className="footer-col-title">SITE</span>
                        <Link to="/directory">AI Directory</Link>
                        <Link to="/help">Help</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>&copy; Kevin Beni</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
