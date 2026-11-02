import "./ProfileCard.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Profile card
const ProfileCard = (props) => {
    // Lightbox open or closed (Yet Another React Lightbox)
    const [open, setOpen] = useState(false);

    return (
        <div className="profile-card">
            {/* Click to enlarge */}
            <div className="thumb">
                <button type="button" onClick={() => setOpen(true)} aria-label={"Enlarge " + props.name}>
                    <img src={props.image} alt={props.name} />
                </button>
                <span className="hint">Click to enlarge</span>
            </div>

            <h1>{props.name}</h1>
            <div className="stats">
                <div>
                    <span className="label">CATEGORY</span>
                    <span className="value">{props.category}</span>
                </div>
                <div>
                    <span className="label">PRICE</span>
                    <span className="value">{props.price}</span>
                </div>
                <div>
                    <span className="label">PLATFORM</span>
                    <span className="value">{props.platform}</span>
                </div>
            </div>
            <span className="btn btn-primary">Visit {props.name}</span>

            {/* Enlarged image */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: props.image, alt: props.name }]}
                render={{ buttonPrev: () => null, buttonNext: () => null }} />
        </div>
    );
};

export default ProfileCard;
