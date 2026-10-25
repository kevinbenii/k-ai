import "./Task.css";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DetailSidebar from "../../components/detailsidebar/DetailSidebar";
import ProfileCard from "../../components/profilecard/ProfileCard";
import TryBox from "../../components/trybox/TryBox";
import InfoCard from "../../components/infocard/InfoCard";

// Task tool page
const Task = () => {
    return (
        <div id="task" className="page">
            <Breadcrumb category="Business and Productivity" to="/business" />

            <div className="container detail-layout">
                <DetailSidebar current="business" />
                <div className="detail-content">
                    <ProfileCard
                        image={process.env.PUBLIC_URL + "/images/task.jpg"}
                        name="Task"
                        category="Business"
                        price="Free to try"
                        platform="Web" />
                    <p className="intro">Task takes whatever's on your plate — meeting notes, a rough to-do list, or a project brief — and organizes it into clear daily tasks, so nothing slips through the cracks.</p>

                    <div className="detail-section">
                        <h2>Try Task</h2>
                        <TryBox placeholder="Describe what's on your plate, or upload meeting notes or a task list…" />
                    </div>

                    <div className="detail-section">
                        <h2>What it does</h2>
                        <div className="card-grid">
                            <InfoCard title="Task creation" description="Turns notes and briefs into clear action items." />
                            <InfoCard title="Auto-scheduling" description="Slots tasks into your day based on priority." />
                            <InfoCard title="Progress tracking" description="See what's done and what's still open." />
                        </div>
                    </div>

                    <div className="detail-section">
                        <h2>Similar tools</h2>
                        <div className="card-grid">
                            <InfoCard title="Report" description="Writes reports for you." />
                            <InfoCard title="Relay" description="Drafts replies to your emails." />
                            <InfoCard title="Grid" description="Builds a project plan for you." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
