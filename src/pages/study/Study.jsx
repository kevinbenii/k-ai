import "./Study.css";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DetailSidebar from "../../components/detailsidebar/DetailSidebar";
import ProfileCard from "../../components/profilecard/ProfileCard";
import TryBox from "../../components/trybox/TryBox";
import InfoCard from "../../components/infocard/InfoCard";

// Study tool page
const Study = () => {
    return (
        <div id="study" className="page">
            <Breadcrumb category="Education and Research" to="/education" />

            <div className="container detail-layout">
                <DetailSidebar current="education" />
                <div className="detail-content">
                    <ProfileCard
                        image={process.env.PUBLIC_URL + "/images/study.png"}
                        name="Study"
                        category="Education"
                        price="Free to try"
                        platform="Web" />
                    <p className="intro">Study turns your lecture notes and readings into a clear study guide in minutes, so you spend your time reviewing instead of organizing.</p>

                    <div className="detail-section">
                        <h2>Try Study</h2>
                        <TryBox placeholder="Upload your notes, slides, or readings, or describe what you're studying for…" />
                    </div>

                    <div className="detail-section">
                        <h2>What it does</h2>
                        <div className="card-grid">
                            <InfoCard title="Study guides" description="Turns notes and slides into an organized guide." />
                            <InfoCard title="Key terms" description="Pulls out the terms most likely to matter." />
                            <InfoCard title="Practice questions" description="Generates questions to test what you know." />
                        </div>
                    </div>

                    <div className="detail-section">
                        <h2>Similar tools</h2>
                        <div className="card-grid">
                            <InfoCard title="Practice" description="Makes quizzes for you." />
                            <InfoCard title="Compass" description="Finds sources for your research." />
                            <InfoCard title="Recall" description="Turns readings into flashcards." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;
