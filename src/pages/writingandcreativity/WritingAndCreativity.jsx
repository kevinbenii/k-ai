import "./WritingAndCreativity.css";
import PageHero from "../../components/pagehero/PageHero";
import About from "../../components/about/About";
import ToolCard from "../../components/toolcard/ToolCard";
import CheckItem from "../../components/checkitem/CheckItem";
import InfoCard from "../../components/infocard/InfoCard";
import Tip from "../../components/tip/Tip";
import Button from "../../components/button/Button";

// Images folder
const images = process.env.PUBLIC_URL + "/images/";

// Writing and Creativity page
const WritingAndCreativity = () => {
    return (
        <div id="writing" className="page">
            <PageHero
                label="WRITING AND CREATIVITY"
                title="Writing and Creativity"
                subtitle="Write and create with AI." />

            <About text="From a blank page to a finished draft, these tools help you write, edit, and create." />

            <section className="cat-section">
                <div className="container tool-grid">
                    <ToolCard to="/write" image={images + "write.png"} name="Write" category="Writing and Creativity" description="Helps you write." price="Free to try" platform="Web" />
                    <ToolCard to="/writing" image={images + "creation.jpg"} name="Creation" category="Writing and Creativity" description="Generates images and videos for you." price="Free to try" platform="Web" />
                </div>
            </section>

            <section className="cat-section">
                <div className="container output">
                    <h2>Output</h2>
                    <div className="checklist">
                        <CheckItem text="Getting past writer's block on a first draft" />
                        <CheckItem text="Generating on-brand images for a project" />
                        <CheckItem text="Rewriting a paragraph in a different tone" />
                        <CheckItem text="Turning a script into a storyboard" />
                    </div>
                </div>
            </section>

            <section className="cat-section use-cases">
                <div className="container">
                    <h2>Common use cases</h2>
                    <div className="card-grid">
                        <InfoCard title="First drafts" description="Get past the blank page with a starting draft to edit." />
                        <InfoCard title="Image concepts" description="Generate visuals for a project without hiring a designer." />
                        <InfoCard title="Editing feedback" description="Get suggestions on tone, clarity, and pacing." />
                    </div>
                </div>
            </section>

            <section className="cat-section">
                <div className="container">
                    <div className="tips-box">
                        <h3>Tips for getting the most out of these tools</h3>
                        <ul>
                            <Tip text="Use AI drafts as a starting point, then edit in your own voice." />
                            <Tip text="Always disclose AI-generated images per your platform's rules." />
                            <Tip text="Save a few prompt templates that consistently work for you." />
                        </ul>
                    </div>
                </div>
            </section>

            <section className="cat-section">
                <div className="container">
                    <h2>Explore other categories</h2>
                    <div className="button-row">
                        <Button to="/education" name="Education and Research" />
                        <Button to="/coding" name="Coding and Technology" />
                        <Button to="/business" name="Business and Productivity" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WritingAndCreativity;
