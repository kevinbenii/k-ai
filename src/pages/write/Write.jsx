import "./Write.css";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DetailSidebar from "../../components/detailsidebar/DetailSidebar";
import ProfileCard from "../../components/profilecard/ProfileCard";
import TryBox from "../../components/trybox/TryBox";
import InfoCard from "../../components/infocard/InfoCard";

// Write tool page
const Write = () => {
    return (
        <div id="write" className="page">
            <Breadcrumb category="Writing and Creativity" to="/writing" />

            <div className="container detail-layout">
                <DetailSidebar current="writing" />
                <div className="detail-content">
                    <ProfileCard
                        image={process.env.PUBLIC_URL + "/images/write.png"}
                        name="Write"
                        category="Writing"
                        price="Free to try"
                        platform="Web" />
                    <p className="intro">Write is a drafting partner for anything from an essay to a short story. Give it a topic or a rough draft, and it helps you shape the structure, tighten the wording, and finish with a stronger piece.</p>

                    <div className="detail-section">
                        <h2>Try Write</h2>
                        <TryBox placeholder="Paste a draft, or describe what you want to write…" />
                    </div>

                    <div className="detail-section">
                        <h2>What it does</h2>
                        <div className="card-grid">
                            <InfoCard title="Draft assistance" description="Get past the blank page with a starting structure." />
                            <InfoCard title="Line editing" description="Tighten wording and fix awkward phrasing sentence by sentence." />
                            <InfoCard title="Tone matching" description="Keep your own voice consistent from start to finish." />
                        </div>
                    </div>

                    <div className="detail-section">
                        <h2>Similar tools</h2>
                        <div className="card-grid">
                            <InfoCard title="Creation" description="Generates images and videos for you." />
                            <InfoCard title="Echo" description="Rewrites your draft in a new tone." />
                            <InfoCard title="Frame" description="Storyboards a video from a script." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;
