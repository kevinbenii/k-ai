import "./TryBox.css";

// Try box
const TryBox = (props) => {
    return (
        <div>
            <div className="try-box">
                <p>{props.placeholder}</p>
                <div className="row">
                    <span className="attach">&#128206;</span>
                    <span className="btn btn-primary">Generate</span>
                </div>
            </div>
            <p className="try-helper">Attach notes, documents, or photos — PDF, DOCX, PNG, JPG up to 25MB.</p>
        </div>
    );
};

export default TryBox;
