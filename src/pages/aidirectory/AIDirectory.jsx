import "./AIDirectory.css";
import PageHero from "../../components/pagehero/PageHero";
import Chip from "../../components/chip/Chip";
import ToolCard from "../../components/toolcard/ToolCard";
import InfoCard from "../../components/infocard/InfoCard";
import NumberedCard from "../../components/numberedcard/NumberedCard";

// Images folder
const images = process.env.PUBLIC_URL + "/images/";

// AI Directory page
const AIDirectory = () => {
    return (
        <div id="directory" className="page">
            <PageHero
                label="AI DIRECTORY"
                title="AI Directory"
                subtitle="Browse different AI Tools" />

            <section className="dir-section">
                <div className="container">
                    <div className="chip-row">
                        <Chip name="Education and Research" active />
                        <Chip name="Writing and Creativity" active />
                        <Chip name="Coding and Technology" active />
                        <Chip name="Business and Productivity" active />
                        <Chip name="Image Generation" />
                    </div>
                    <div className="chip-row">
                        <Chip name="Video" />
                        <Chip name="Politics" />
                        <Chip name="Research" />
                        <Chip name="Finance" />
                        <Chip name="Health" />
                        <Chip name="Sports" />
                        <Chip name="Law" />
                        <Chip name="Creativity" />
                        <Chip name="Productivity" />
                        <Chip name="Technical and Data" />
                    </div>
                </div>
            </section>

            <section className="dir-section">
                <div className="container">
                    <h2>Popular this week</h2>
                    <div className="card-grid tool-grid">
                        <ToolCard to="/study" image={images + "study.png"} name="Study" category="Education and Research" description="Turns notes into a study guide." price="Free to try" platform="Web" />
                        <ToolCard to="/codefixer" image={images + "codefixer.png"} name="Code Fixer" category="Coding and Technology" description="Checks your code." price="Free to try" platform="Web" />
                        <ToolCard to="/task" image={images + "task.jpg"} name="Task" category="Business and Productivity" description="Creates and organizes daily tasks." price="Free to try" platform="Web" />
                        <ToolCard to="/write" image={images + "write.png"} name="Write" category="Writing and Creativity" description="Helps you write." price="Free to try" platform="Web" />
                        <ToolCard to="/education" image={images + "practice.jpg"} name="Practice" category="Education and Research" description="Makes quizzes for you." price="Free to try" platform="Web" />
                        <ToolCard to="/coding" image={images + "debugger.png"} name="Debugger" category="Coding and Technology" description="Finds bugs in your code." price="Free to try" platform="Web" />
                        <ToolCard to="/business" image={images + "report.png"} name="Report" category="Business and Productivity" description="Writes reports for you." price="Free to try" platform="Web" />
                        <ToolCard to="/writing" image={images + "creation.jpg"} name="Creation" category="Writing and Creativity" description="Generates images and videos for you." price="Free to try" platform="Web" />
                    </div>
                </div>
            </section>

            <section className="dir-section">
                <div className="container">
                    <h2>What each type of tool actually does</h2>
                    <div className="card-grid">
                        <InfoCard title="Image Generation" description="Creates original images and art from a text prompt." />
                        <InfoCard title="Video" description="Edits, generates, or captions video content." />
                        <InfoCard title="Politics" description="Summarizes legislation and tracks public records." />
                        <InfoCard title="Research" description="Finds and summarizes academic sources." />
                        <InfoCard title="Finance" description="Tracks spending and explains financial terms." />
                        <InfoCard title="Health" description="Answers general wellness and fitness questions." />
                        <InfoCard title="Sports" description="Analyzes stats and predicts outcomes." />
                        <InfoCard title="Law" description="Reviews contracts and explains legal terms." />
                        <InfoCard title="Creativity" description="Brainstorms ideas and creative concepts." />
                        <InfoCard title="Productivity" description="Automates repetitive daily tasks." />
                        <InfoCard title="Technical and Data" description="Cleans, analyzes, and visualizes data." />
                    </div>
                </div>
            </section>

            <section className="dir-section">
                <div className="container">
                    <h2>How the directory works</h2>
                    <div className="card-grid">
                        <NumberedCard number="01" title="Added by hand" description="Every tool is reviewed and added." />
                        <NumberedCard number="02" title="Sorted by purpose" description="Tools are grouped by what you're trying to do, not by buzzwords." />
                        <NumberedCard number="03" title="Checked regularly" description="Listings are revisited so broken or outdated tools don't stick around." />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIDirectory;
