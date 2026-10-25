import "./PageHero.css";

// Page title area
const PageHero = (props) => {
    return (
        <section className="page-hero container">
            {props.label && <span className="eyebrow">{props.label}</span>}
            <h1>{props.title}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
        </section>
    );
};

export default PageHero;
