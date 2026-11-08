import "./Tools.css";
import ToolList from "../toollist/ToolList";

// Tools section
const Tools = () => {
    return (
        <section className="tools">
            <div className="container">
                <div className="section-head">
                    <h2>Tools</h2>
                    <p>Browse different AI tools.</p>
                </div>
                <div className="card-grid">
                    <ToolList limit={4} />
                </div>
            </div>
        </section>
    );
};

export default Tools;
