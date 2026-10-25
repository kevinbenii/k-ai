import "./Testimonials.css";
import QuoteCard from "../quotecard/QuoteCard";

// What students say
const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h2>What students say</h2>
                <div className="card-grid">
                    <QuoteCard
                        quote="I stopped bookmarking random AI sites once I found K·AI. Everything I need for class is sorted by category."
                        name="Computer Science major" />
                    <QuoteCard
                        quote="Code Fixer alone saved me hours of debugging before a project deadline."
                        name="Engineering major" />
                    <QuoteCard
                        quote="Simple, fast, no clutter. I use Study every week before exams."
                        name="Business major" />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
