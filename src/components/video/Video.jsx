import "./Video.css";

// Video (YouTube iframe)
const Video = (props) => {
    return (
        <div className="video">
            <div className="video-text">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <iframe
                src={props.src}
                title={props.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
        </div>
    );
};

export default Video;
