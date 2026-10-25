import "./About.css";
import PageHero from "../../components/pagehero/PageHero";
import InfoCard from "../../components/infocard/InfoCard";
import NumberedCard from "../../components/numberedcard/NumberedCard";
import CtaBanner from "../../components/ctabanner/CtaBanner";

// About page
const About = () => {
    return (
        <div id="about" className="page">
            <PageHero
                label="ABOUT K·AI"
                title="About K·AI"
                subtitle="Why one student decided to build a home for every AI tool." />

            <section className="about-section">
                <div className="container about-grid">
                    <div className="founder-card">
                        <img src={process.env.PUBLIC_URL + "/images/aboutme.png"} alt="Kevin Beni" />
                        <h3>Kevin Beni</h3>
                        <p className="role">Creator of K·AI</p>
                        <p>Computer Information Systems student, University of South Carolina.</p>
                    </div>
                    <div className="story">
                        <h2>The story behind K·AI</h2>
                        <p>As a college student, I've seen firsthand how much AI has changed daily life — not just for me, but for everyone around me. It's gone from a novelty to something people rely on every day, for work, school, and everything in between.</p>
                        <p>That's why I built K·AI, named after myself. Instead of AI tools being scattered across a hundred different sites, K·AI brings them together in one place — organized by what they're actually good for, from education and research to coding, business, and creative work.</p>
                        <p>My goal is simple: make K·AI a central AI hub where anyone can explore the different types of AI tools out there and find the ones that fit what they need.</p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <div className="quote-block">
                        <p>“My main goal for K·AI is to be a central AI hub for users to explore all different types of artificial intelligence and tools for their needs.”</p>
                        <cite>— Kevin Beni, Creator of K·AI</cite>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <h2>What you'll find on K·AI</h2>
                    <div className="card-grid">
                        <InfoCard title="Education and Research" description="Learn with AI." />
                        <InfoCard title="Coding and Technology" description="Write code with AI." />
                        <InfoCard title="Business and Productivity" description="Get work done faster." />
                        <InfoCard title="Writing and Creativity" description="Write and create with AI." />
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <h2>How K·AI got here</h2>
                    <div className="card-grid">
                        <NumberedCard number="1" title="Started as a bookmarks list" description="K·AI began as a personal list of AI tools Kevin kept reaching for in class." />
                        <NumberedCard number="2" title="Sorted into categories" description="The list grew too long to scroll, so tools were grouped by what they're actually used for." />
                        <NumberedCard number="3" title="Built into a site" description="That grouping became K·AI — a hub other students could browse too." />
                        <NumberedCard number="4" title="Still growing" description="New tools get added and checked by hand as they're found." />
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <h2>Featured video</h2>
                    <div className="video-text">
                        <h3>AI</h3>
                        <p>A short video on AI, Machine Learning, Deep Learning and Generative AI explained.</p>
                    </div>
                </div>
            </section>

            <CtaBanner />
        </div>
    );
};

export default About;
