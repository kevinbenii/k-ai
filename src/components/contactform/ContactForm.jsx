import "./ContactForm.css";
import toast from "react-hot-toast";

// Contact form (sends through Web3Forms without leaving the page)
const ContactForm = () => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        // Pop-up while sending (React Hot Toast)
        const sending = toast.loading("Sending...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                toast.success("Thanks! Your message was sent.", { id: sending });
                form.reset();
            } else {
                toast.error("Sorry, your message could not be sent. Please try again.", { id: sending });
            }
        } catch (error) {
            toast.error("Sorry, your message could not be sent. Please try again.", { id: sending });
        }
    };

    return (
        <form className="contact-form" onSubmit={onSubmit}>
            {/* Web3Forms access key */}
            <input type="hidden" name="access_key" value="1bbf82c2-ec53-40e4-b7ab-ecdfa1dc0ddf" />

            <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="First and Last Name" required minLength="2" />
            </div>

            <div className="form-field">
                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email" name="email" placeholder="name@email.com" required />
            </div>

            <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="803-555-1234" required pattern="[0-9\-\(\) +]{10,}" title="Enter a phone number with at least 10 digits, like 803-555-1234" />
            </div>

            <div className="form-field">
                <label htmlFor="category">What do you need help with?</label>
                <select id="category" name="category" required defaultValue="">
                    <option value="">Choose a category</option>
                    <option>Education and Research</option>
                    <option>Coding and Technology</option>
                    <option>Business and Productivity</option>
                    <option>Writing and Creativity</option>
                    <option>AI Directory</option>
                    <option>About or Help pages</option>
                    <option>Something else</option>
                </select>
            </div>

            <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="How can we help?" required minLength="10"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send message</button>
        </form>
    );
};

export default ContactForm;
