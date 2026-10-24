import "./Hero.css";
import { Link } from "react-router-dom";

// Hero
const Hero = () => {
    return (
        <section className="hero container">
            <h1 className="hero-title">One hub for every AI tool.</h1>
            <p className="hero-subhead">Find AI tools for education, coding, business, writing, and more — all in one place.</p>
            <div className="cta-row">
                <Link to="/directory" className="btn btn-primary">Explore the AI Directory</Link>
                <Link to="/#how-it-works" className="btn btn-secondary">How K·AI works</Link>
            </div>
        </section>
    );
};

export default Hero;
