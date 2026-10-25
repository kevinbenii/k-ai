import "./Help.css";
import { Link } from "react-router-dom";
import PageHero from "../../components/pagehero/PageHero";
import StepCard from "../../components/stepcard/StepCard";
import NumberedCard from "../../components/numberedcard/NumberedCard";
import FaqItem from "../../components/faqitem/FaqItem";

// Help page
const Help = () => {
    return (
        <div id="help" className="page">
            <PageHero
                label="HELP"
                title="Help"
                subtitle="Learn how K·AI works." />

            <section className="help-section">
                <div className="container steps">
                    <h2>How K·AI works</h2>
                    <div className="steps-grid">
                        <StepCard number="1" title="Pick a category" description="Select a tool for your task." />
                        <StepCard number="2" title="Compare tools" description="See what each tool does and how it is used." />
                        <StepCard number="3" title="Launch it" description="Open and explore a tool." />
                    </div>
                    <Link to="/directory" className="btn btn-primary">Explore the AI Directory</Link>
                </div>
            </section>

            <section className="help-section">
                <div className="container">
                    <h2>What makes a good AI tool</h2>
                    <div className="card-grid">
                        <NumberedCard number="1" title="Does one thing well" description="The best tools solve a specific problem instead of trying to do everything." />
                        <NumberedCard number="2" title="Clear about limits" description="A good tool tells you what it can't do, not just what it can." />
                        <NumberedCard number="3" title="Easy to leave" description="You should be able to export your work and walk away anytime." />
                        <NumberedCard number="4" title="Actually maintained" description="Still updated, still online — not an abandoned side project." />
                    </div>
                </div>
            </section>

            <section className="help-section">
                <div className="container">
                    <h2>Frequently asked questions</h2>
                    <div className="faq-list">
                        <FaqItem question="Is K·AI free to use?" answer="Yes. Browsing the directory and reading tool profiles is free." />
                        <FaqItem question="How do you pick which tools to list?" answer="Every tool is added and checked by hand, not pulled from an automated list." />
                        <FaqItem question="Can I suggest a tool?" answer="Yes. Use the contact form below to send a suggestion." />
                        <FaqItem question="Do I need an account to browse?" answer="No. You can browse the whole directory without signing up." />
                    </div>
                </div>
            </section>

            <section className="help-section">
                <div className="container">
                    <h2>Still stuck? Contact us</h2>
                </div>
            </section>
        </div>
    );
};

export default Help;
