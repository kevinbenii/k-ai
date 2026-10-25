import "./Founder.css";

// Founder section
const Founder = () => {
    return (
        <section className="founder">
            <div className="container founder-grid">
                <div className="founder-text">
                    <span className="eyebrow">ABOUT K·AI</span>
                    <h2>Built by a student who kept losing track of AI tools</h2>
                    <p>K·AI started as a personal project by Kevin Beni, a college student who noticed how much AI was changing daily life — and how scattered the tools for it were. What began as a way to organize a growing list of favorites turned into a central hub for education, coding, business, and creative tools alike, built for students first.</p>
                </div>
                <div className="founder-card">
                    <img src={process.env.PUBLIC_URL + "/images/aboutme.png"} alt="Kevin Beni" />
                    <div>
                        <h3>Kevin Beni</h3>
                        <p>Creator of K·AI</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
