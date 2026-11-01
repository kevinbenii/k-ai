import "./Slideshow.css";
import { useState, useEffect } from "react";
import Slide from "../slide/Slide";

// Images folder
const images = process.env.PUBLIC_URL + "/images/";

// Slides
const slides = [
    { to: "/study", image: images + "study.png", name: "Study", category: "Education and Research", description: "Turns your lecture notes and readings into a clear study guide in minutes." },
    { to: "/codefixer", image: images + "codefixer.png", name: "Code Fixer", category: "Coding and Technology", description: "Reviews your code, explains what it finds, and suggests a fix you can accept in one click." },
    { to: "/task", image: images + "task.jpg", name: "Task", category: "Business and Productivity", description: "Organizes meeting notes and to-do lists into clear daily tasks." },
    { to: "/write", image: images + "write.png", name: "Write", category: "Writing and Creativity", description: "A drafting partner for anything from an essay to a short story." }
];

// Slideshow coded from scratch (no library)
const Slideshow = () => {
    // Current slide number
    const [current, setCurrent] = useState(0);

    // Go to the next slide (back to the first after the last)
    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    // Go to the previous slide (to the last before the first)
    const prevSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    // Change slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((c) => (c + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className="slideshow">
            <div className="container">
                <h2>Featured tools</h2>
                <div className="slides">
                    {slides.map((slide, index) => (
                        <Slide
                            key={slide.name}
                            active={index === current}
                            to={slide.to}
                            image={slide.image}
                            name={slide.name}
                            category={slide.category}
                            description={slide.description} />
                    ))}
                </div>
                <div className="controls">
                    <button type="button" className="arrow" onClick={prevSlide} aria-label="Previous slide">&#8249;</button>
                    {slides.map((slide, index) => (
                        <button
                            type="button"
                            key={slide.name}
                            className={index === current ? "dot active" : "dot"}
                            onClick={() => setCurrent(index)}
                            aria-label={"Go to slide " + (index + 1)}></button>
                    ))}
                    <button type="button" className="arrow" onClick={nextSlide} aria-label="Next slide">&#8250;</button>
                </div>
            </div>
        </section>
    );
};

export default Slideshow;
