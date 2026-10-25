import "./CtaBanner.css";
import { Link } from "react-router-dom";

// Ready to find your next tool
const CtaBanner = () => {
    return (
        <section className="cta">
            <div className="container">
                <div className="cta-banner">
                    <div>
                        <h2>Ready to find your next tool?</h2>
                        <p>Jump into the directory and browse by category.</p>
                    </div>
                    <Link to="/directory" className="btn btn-primary">Explore the AI Directory</Link>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
