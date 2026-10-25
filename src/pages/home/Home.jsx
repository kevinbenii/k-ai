import Hero from "../../components/hero/Hero";
import Hub from "../../components/hub/Hub";
import About from "../../components/about/About";
import Categories from "../../components/categories/Categories";
import Tools from "../../components/tools/Tools";
import HowItWorks from "../../components/howitworks/HowItWorks";
import Founder from "../../components/founder/Founder";
import WhyKai from "../../components/whykai/WhyKai";

// Home page
const Home = () => {
    return (
        <div id="home" className="page">
            <Hero />
            <Hub />
            <About
                label="ABOUT K·AI"
                text="AI has become part of daily life — not just for specialists, but for anyone trying to learn, build, or get work done. K·AI exists because finding the right tool for that shouldn't mean digging through a dozen tabs. It's a central hub for AI tools across education, coding, business, writing, and beyond, built by a student who was tired of doing exactly that." />
            <Categories />
            <Tools />
            <HowItWorks />
            <Founder />
            <WhyKai />
        </div>
    );
};

export default Home;
