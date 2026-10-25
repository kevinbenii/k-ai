import "./WhyKai.css";
import ValueCard from "../valuecard/ValueCard";

// Why K·AI
const WhyKai = () => {
    return (
        <section className="why-kai">
            <div className="container">
                <h2>Why K·AI</h2>
                <div className="value-grid">
                    <ValueCard
                        title="One place to look"
                        description="Every category lives on K·AI, so you stop bouncing between tabs." />
                    <ValueCard
                        title="Picked, not scraped"
                        description="Each tool is added and checked by hand, not pulled from a random list." />
                    <ValueCard
                        title="Built for students"
                        description="Made by a student, for the tools students actually reach for." />
                </div>
            </div>
        </section>
    );
};

export default WhyKai;
