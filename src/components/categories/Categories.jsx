import "./Categories.css";
import CategoryCard from "../categorycard/CategoryCard";

// Browse by category
const Categories = () => {
    return (
        <section className="categories">
            <div className="container">
                <div className="section-head">
                    <h2>Browse by category</h2>
                    <p>Every tool on K·AI is sorted into one of four categories.</p>
                </div>
                <div className="card-grid">
                    <CategoryCard
                        to="/education"
                        title="Education and Research"
                        description="Learn with AI." />
                    <CategoryCard
                        to="/coding"
                        title="Coding and Technology"
                        description="Write code with AI." />
                    <CategoryCard
                        to="/business"
                        title="Business and Productivity"
                        description="Get work done faster." />
                    <CategoryCard
                        to="/writing"
                        title="Writing and Creativity"
                        description="Write and create with AI." />
                </div>
            </div>
        </section>
    );
};

export default Categories;
