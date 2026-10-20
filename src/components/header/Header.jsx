import "./Header.css";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

// Header
const Header = () => {
    return (
        <header className="site-header">
            <div className="container site-header-inner">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
