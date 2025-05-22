import { useState } from 'react';
import {FaExternalLinkAlt} from 'react-icons/fa'
import '../styles/contact.css';
import kpr_top_view from '../assets/kpr_top_view.png'

function Contact() {

    const [formData, setFormData] = useState({ email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Success");
        e.target.reset();
        const scriptURL = "https://script.google.com/macros/s/AKfycbzdjCtGm2Xv5xewu3qQS7v4FZ-aqLcgdf8l0Rkv1ySGg--L3wFeON30vL5DRoklQ3MYoA/exec";
        await fetch(scriptURL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        });
    };

    return (
        <div className="contact_us-container">
            <div className="contact_us-container-text">
                <p> <span> Get in Touch with Us!</span> Have questions or ideas? We’re here to help! Connect with us and be a part of innovation and excellence at KPRIET.</p>
            </div>
            <hr />
            <div className="contact_us-form">
                <div className="form-main">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Your Email <span>*</span></label><br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            placeholder="example@gmail.com"
                            onChange={handleChange}
                            value={formData.xxx}
                        /><br />
                        <label htmlFor="subject">Subject <span>*</span></label><br />
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            placeholder="Let us know how we can help"
                            onChange={handleChange}
                        /><br />
                        <label htmlFor="message">Your Message <span>*</span></label><br />
                        <input type='text'
                            id="message"
                            name="message"
                            required
                            placeholder="Leave a Comment..."
                            onChange={handleChange}
                        /><br />
                        <input type="submit" value="Submit Now" />
                    </form>
                </div>
                <div className="form-content">
                <p> <span id ="form-content-header"> Ask how we can Help! </span></p>
                    <p>Please fill the provided form, and we will get back to you as soon as possible</p>
                    <p><span>Your Email </span>– Share your email with us so we can reach out to you with the right support and updates! Stay connected effortlessly.</p>
                    <p><span>Subject</span> – Help us understand your query better by selecting the right subject. This ensures a quick and precise response from our team.</p>
                    <p><span>Message</span> – Tell us what’s on your mind! Whether it’s a question, feedback, or collaboration, drop your message, and we’ll get back to you soon.</p>
                </div>
            </div>
            <hr />
            <div className="get-in-touch">
                <div className="get-in-touch-info">
                    <p className="git-head"> Get in  <span id="git-head-span"> Touch</span></p>
                    <p>Get in touch with an academic advisor at KPR Institute of Engineering and Technology with any questions you have about programs, applications, curriculum, and important dates.</p>
                </div>
                <div className="get-in-touch-contact">
                    <div className="contact">
                        <p className='contact-h'>Contact</p>
                        <p><a href='tel:+91 9443839525'>+91 94438 39525</a><br /><a href='tel:+91 9655445823'>+91 96554 45823 </a> <br /><a rel="link" href="mailto:spark2025@kpriet.ac.in" target="_blank">spark2025@kpriet.ac.in</a></p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="map">
                <div className="map-live">
                    <p> <span id="map-head"> Visit Us! </span> <br /> KPR Institute of Engineering and Technology, Arasur, Coimbatore, Tamil Nadu 641407</p>
                    <br />
                    <iframe
                        style={{ width: "100%", height: "290px", border: "0" }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=KPR+Institute+of+Engineering+and+Technology&output=embed">
                    </iframe>
                </div>
                <div className="map-image">
                    <img src={kpr_top_view} alt="KPR Institute of Engineering and Technology" />
                    <p>KPR Institute of Engineering and Technology, Arasur, Coimbatore</p>
                    <a
                        href="https://www.google.com/maps/dir//KPR+Institute+of+Engineering+and+Technology,+Avinashi+-+Coimbatore+Road,+Arasur,+Uthupalayam,+Tamil+Nadu+641407,+India/@11.076469,77.142019,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8ff7a08d662bb:0x81c68f2ddd8c1dfa!2m2!1d77.1420187!2d11.0764689?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer">
                        Get Direction <span id ="externallink-icon"><FaExternalLinkAlt/></span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
