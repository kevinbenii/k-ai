import "./Tools.css";
import ToolCard from "../toolcard/ToolCard";

// Images folder
const images = process.env.PUBLIC_URL + "/images/";

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
                    <ToolCard
                        to="/study"
                        image={images + "study.png"}
                        name="Study"
                        category="Education and Research"
                        description="Turns notes into a study guide."
                        price="Free to try"
                        platform="Web" />
                    <ToolCard
                        to="/codefixer"
                        image={images + "codefixer.png"}
                        name="Code Fixer"
                        category="Coding and Technology"
                        description="Checks your code."
                        price="Free to try"
                        platform="Web" />
                    <ToolCard
                        to="/task"
                        image={images + "task.jpg"}
                        name="Task"
                        category="Business and Productivity"
                        description="Creates and organizes daily tasks."
                        price="Free to try"
                        platform="Web" />
                    <ToolCard
                        to="/write"
                        image={images + "write.png"}
                        name="Write"
                        category="Writing and Creativity"
                        description="Helps you write."
                        price="Free to try"
                        platform="Web" />
                </div>
            </div>
        </section>
    );
};

export default Tools;
