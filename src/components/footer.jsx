import '../styles/footer.css'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope, FaInstagram, FaGlobe } from "react-icons/fa"
import logo from '../assets/kpr_learn_beyond_logo.jpg'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="SPARK_2025 Logo" />
                </div>
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>International Conference on Smart Systems, Power Electronics Artificial Intelligence, Robotics and
                        Knowledge Engineering(SPARK'25)</p>
                </div>
                <div className="footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to='/Register'>Registration</Link></li>
                        <li><Link to='/Speakers'>Speakers</Link></li>
                        <li><Link to='/Call-for-Papers'>Call for Papers</Link></li>
                        <li><Link to='/Guidelines'>Guidelines</Link></li>
                        <li><Link to='/Venue'>Conference Venue</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul className="social-icons">
                        <li><Link to='https://www.linkedin.com/school/kprietonline/posts/' target='blank'><FaLinkedinIn /></Link></li>
                        <li><Link to='https://www.instagram.com/kprietonline/' target='blank'><FaInstagram /></Link></li>
                        <li><Link to='https://kpriet.ac.in/' target='blank'><FaGlobe /></Link></li>
                        <li><Link to='mailto:info@kpriet.ac.in'target='blank'><FaEnvelope /></Link></li>
                    </ul>
                    <p> Developed by <Link to='https://zenith-chi-six.vercel.app/' target='_blank'>Team Zenith</Link></p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright &copy; 2025 KPR Institute of Engineering and Technology</p>
            </div>
        </footer>
    )
}

export default Footer;