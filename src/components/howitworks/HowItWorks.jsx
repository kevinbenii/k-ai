import "./HowItWorks.css";
import StepCard from "../stepcard/StepCard";

// How K·AI works
const HowItWorks = () => {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <h2>How K·AI works</h2>
                <div className="steps-grid">
                    <StepCard
                        number="1"
                        title="Pick a category"
                        description="Start from what you're trying to do." />
                    <StepCard
                        number="2"
                        title="Compare tools"
                        description="See what each tool does best." />
                    <StepCard
                        number="3"
                        title="Launch it"
                        description="Open the tool and get to work." />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
