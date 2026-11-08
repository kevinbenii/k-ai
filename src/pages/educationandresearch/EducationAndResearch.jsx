import "./EducationAndResearch.css";
import PageHero from "../../components/pagehero/PageHero";
import About from "../../components/about/About";
import ToolList from "../../components/toollist/ToolList";
import CheckItem from "../../components/checkitem/CheckItem";
import InfoCard from "../../components/infocard/InfoCard";
import Tip from "../../components/tip/Tip";
import Button from "../../components/button/Button";

// Education and Research page
const EducationAndResearch = () => {
    return (
        <div id="education" className="page">
            <PageHero
                label="EDUCATION AND RESEARCH"
                title="Education and Research"
                subtitle="Learn with AI." />

            <About text="Whether you're studying for an exam or starting a research paper, these tools can save you hours." />

            <section className="cat-section">
                <div className="container tool-grid">
                    <ToolList category="Education and Research" />
                </div>
            </section>

            <section className="cat-section">
                <div className="container output">
                    <h2>Output</h2>
                    <div className="checklist">
                        <CheckItem text="Summarizing textbook chapters" />
                        <CheckItem text="Building a study schedule before finals" />
                        <CheckItem text="Turning a research question into an outline" />
                        <CheckItem text="Generating practice questions from your own notes" />
                    </div>
                </div>
            </section>

            <section className="cat-section use-cases">
                <div className="container">
                    <h2>Common use cases</h2>
                    <div className="card-grid">
                        <InfoCard title="Exam prep" description="Turn weeks of notes into a focused study guide the night before a test." />
                        <InfoCard title="Research papers" description="Find and summarize sources instead of reading twenty abstracts." />
                        <InfoCard title="Language learning" description="Practice conversations and get instant grammar feedback." />
                    </div>
                </div>
            </section>

            <section className="cat-section">
                <div className="container">
                    <div className="tips-box">
                        <h3>Tips for getting the most out of these tools</h3>
                        <ul>
                            <Tip text="Upload your syllabus or notes first — tools work best with real material." />
                            <Tip text="Use flashcard tools a few days before an exam, not the night before." />
                            <Tip text="Cross-check AI-generated answers against your textbook." />
                        </ul>
                    </div>
                </div>
            </section>

            <section className="cat-section">
                <div className="container">
                    <h2>Explore other categories</h2>
                    <div className="button-row">
                        <Button to="/coding" name="Coding and Technology" />
                        <Button to="/business" name="Business and Productivity" />
                        <Button to="/writing" name="Writing and Creativity" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EducationAndResearch;
