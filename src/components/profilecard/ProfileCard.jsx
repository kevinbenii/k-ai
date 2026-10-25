import "./ProfileCard.css";

// Profile card
const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <img src={props.image} alt={props.name} />
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
        </div>
    );
};

export default ProfileCard;
