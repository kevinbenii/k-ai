import "./BusinessAndProductivity.css";
import PageHero from "../../components/pagehero/PageHero";
import About from "../../components/about/About";
import ToolCard from "../../components/toolcard/ToolCard";
import CheckItem from "../../components/checkitem/CheckItem";
import InfoCard from "../../components/infocard/InfoCard";
import Tip from "../../components/tip/Tip";
import Button from "../../components/button/Button";

// Images folder
const images = process.env.PUBLIC_URL + "/images/";

// Business and Productivity page
const BusinessAndProductivity = () => {
    return (
        <div id="business" className="page">
            <PageHero
                label="BUSINESS AND PRODUCTIVITY"
                title="Business and Productivity"
                subtitle="Get work done faster." />

            <About text="Meetings, reports, and planning take less time when an AI tool handles the first draft." />

            <section className="cat-section">
                <div className="container tool-grid">
                    <ToolCard to="/task" image={images + "task.jpg"} name="Task" category="Business and Productivity" description="Creates and organizes daily tasks." price="Free to try" platform="Web" />
                    <ToolCard to="/business" image={images + "report.png"} name="Report" category="Business and Productivity" description="Writes reports for you." price="Free to try" platform="Web" />
                </div>
            </section>

            <section className="cat-section">
                <div className="container output">
                    <h2>Output</h2>
                    <div className="checklist">
                        <CheckItem text="Turning a meeting recording into action items" />
                        <CheckItem text="Drafting a status update for your team" />
                        <CheckItem text="Building a project timeline from a brief" />
                        <CheckItem text="Automating a repetitive weekly report" />
                    </div>
                </div>
            </section>

            <section className="cat-section use-cases">
                <div className="container">
                    <h2>Common use cases</h2>
                    <div className="card-grid">
                        <InfoCard title="Meeting recaps" description="Turn a recorded call into notes and action items automatically." />
                        <InfoCard title="Email drafts" description="Get a first draft of a reply so you're not starting from blank." />
                        <InfoCard title="Scheduling" description="Turn a rough task list into a realistic daily plan." />
                    </div>
                </div>
            </section>

            <section className="cat-section">
                <div className="container">
                    <div className="tips-box">
                        <h3>Tips for getting the most out of these tools</h3>
                        <ul>
                            <Tip text="Record meetings with consent before using a summarizer tool." />
                            <Tip text="Review AI-drafted reports before sending them out." />
                            <Tip text="Set recurring reminders so planning tools stay up to date." />
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
                        <Button to="/writing" name="Writing and Creativity" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessAndProductivity;
