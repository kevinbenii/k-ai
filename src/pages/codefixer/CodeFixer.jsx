import "./CodeFixer.css";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DetailSidebar from "../../components/detailsidebar/DetailSidebar";
import ProfileCard from "../../components/profilecard/ProfileCard";
import TryBox from "../../components/trybox/TryBox";
import InfoCard from "../../components/infocard/InfoCard";

// Code Fixer tool page
const CodeFixer = () => {
    return (
        <div id="codefixer" className="page">
            <Breadcrumb category="Coding and Technology" to="/coding" />

            <div className="container detail-layout">
                <DetailSidebar current="coding" />
                <div className="detail-content">
                    <ProfileCard
                        image={process.env.PUBLIC_URL + "/images/codefixer.png"}
                        name="Code Fixer"
                        category="Coding"
                        price="Free to try"
                        platform="Web, IDE" />
                    <p className="intro">Code Fixer reviews your code as you write it, explains what it finds in plain language, and suggests a fix you can accept in one click.</p>

                    <div className="detail-section">
                        <h2>Try Code Fixer</h2>
                        <TryBox placeholder="Paste your code, or upload a file to review…" />
                    </div>

                    <div className="detail-section">
                        <h2>What it does</h2>
                        <div className="card-grid">
                            <InfoCard title="Code review" description="Flags issues before you open a pull request." />
                            <InfoCard title="Plain explanations" description="Explains why something is a problem." />
                            <InfoCard title="One-click fixes" description="Applies the suggested fix instantly." />
                        </div>
                    </div>

                    <div className="detail-section">
                        <h2>Similar tools</h2>
                        <div className="card-grid">
                            <InfoCard title="Debugger" description="Finds bugs in your code." />
                            <InfoCard title="Patch" description="Fixes failing tests for you." />
                            <InfoCard title="Sentry" description="Reviews pull requests for you." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeFixer;
