import "./About.css";

// Intro section
const About = (props) => {
    return (
        <section className="about-intro container">
            {props.label && <span className="eyebrow">{props.label}</span>}
            <p className="about-intro-text">{props.text}</p>
        </section>
    );
};

export default About;
