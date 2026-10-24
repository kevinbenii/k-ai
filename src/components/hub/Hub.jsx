import "./Hub.css";
import HubNode from "./HubNode";

// Hub diagram
const Hub = () => {
    return (
        <div className="hub container">
            <svg className="hub-diagram" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                <line x1="300" y1="150" x2="120" y2="60" stroke="var(--color-border)" strokeWidth="1.5" />
                <line x1="300" y1="150" x2="480" y2="60" stroke="var(--color-border)" strokeWidth="1.5" />
                <line x1="300" y1="150" x2="120" y2="240" stroke="var(--color-border)" strokeWidth="1.5" />
                <line x1="300" y1="150" x2="480" y2="240" stroke="var(--color-border)" strokeWidth="1.5" />

                <circle cx="300" cy="150" r="30" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.5" />
                <text x="300" y="155" textAnchor="middle" className="hub-node-label hub-node-label--center">K·AI</text>

                <HubNode to="/education" x="120" y="60" labelY="28" label="Education & Research" />
                <HubNode to="/coding" x="480" y="60" labelY="28" label="Coding & Tech" />
                <HubNode to="/business" x="120" y="240" labelY="278" label="Business & Productivity" />
                <HubNode to="/writing" x="480" y="240" labelY="278" label="Writing & Creativity" />
            </svg>
        </div>
    );
};

export default Hub;
