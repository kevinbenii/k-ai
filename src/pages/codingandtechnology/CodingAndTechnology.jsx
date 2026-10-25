import "./CodingAndTechnology.css";
import PageHero from "../../components/pagehero/PageHero";
import About from "../../components/about/About";
import ToolCard from "../../components/toolcard/ToolCard";
import CheckItem from "../../components/checkitem/CheckItem";
import InfoCard from "../../components/infocard/InfoCard";
import Tip from "../../components/tip/Tip";
import Button from "../../components/button/Button";

// Images folder
const images = process.env.PUBLIC_URL + "/images/";

// Coding and Technology page
const CodingAndTechnology = () => {
    return (
        <div id="coding" className="page">
            <PageHero
                label="CODING AND TECHNOLOGY"
                title="Coding and Technology"
                subtitle="Write code with AI." />

            <About text="From your first bug to your next deploy, these tools help you write and ship code faster." />

            <section className="cat-section">
                <div className="container tool-grid">
                    <ToolCard to="/codefixer" image={images + "codefixer.png"} name="Code Fixer" category="Coding and Technology" description="Checks your code." price="Free to try" platform="Web" />
                    <ToolCard to="/coding" image={images + "debugger.png"} name="Debugger" category="Coding and Technology" description="Finds bugs in your code." price="Free to try" platform="Web" />
                </div>
            </section>

            <section className="cat-section">
                <div className="container output">
                    <h2>Output</h2>
                    <div className="checklist">
                        <CheckItem text="Reviewing a pull request before it ships" />
                        <CheckItem text="Explaining an error message in plain English" />
                        <CheckItem text="Writing unit tests for existing code" />
                        <CheckItem text="Refactoring a function without breaking it" />
                    </div>
                </div>
            </section>

            <section className="cat-section use-cases">
                <div className="container">
                    <h2>Common use cases</h2>
                    <div className="card-grid">
                        <InfoCard title="Debugging" description="Paste an error and get a plain-language explanation of what broke." />
                        <InfoCard title="Code review" description="Catch style and logic issues before a human reviewer sees them." />
                        <InfoCard title="Learning to code" description="Get a line-by-line explanation of unfamiliar code." />
                    </div>
                </div>
            </section>

            <section className="cat-section">
                <div className="container">
                    <div className="tips-box">
                        <h3>Tips for getting the most out of these tools</h3>
                        <ul>
                            <Tip text="Review every suggested fix before committing — don't auto-accept blindly." />
                            <Tip text="Point code tools at one file or function at a time for better results." />
                            <Tip text="Use a linter alongside AI review, not instead of it." />
                        </ul>
                    </div>
                </div>
            </section>

            <section className="cat-section">
                <div className="container">
                    <h2>Explore other categories</h2>
                    <div className="button-row">
                        <Button to="/education" name="Education and Research" />
                        <Button to="/business" name="Business and Productivity" />
                        <Button to="/writing" name="Writing and Creativity" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CodingAndTechnology;
