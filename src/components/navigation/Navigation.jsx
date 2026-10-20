import "./Navigation.css";

// Menu
const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#directory">AI Directory</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#directory" className="nav-cta">Explore Directory</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
