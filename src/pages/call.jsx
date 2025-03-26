import '../styles/call.css'
import { FaLinkedin, FaTwitter, FaPhoneAlt, FaCalendarAlt, FaPaperPlane, FaCamera, FaBell, FaCalendarMinus, FaFileDownload, FaFileWord, FaInstagram, FaGlobe } from "react-icons/fa"
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import { FaWebAwesome, FaWebflow } from 'react-icons/fa6'

function Call() {
    return (
        <div className="callForPapers">
            <div className="callForPapers-content">
                <div className="callForPapers-header">
                    <h1>Call for Papers</h1>
                    <p> <span>Accepted papers will be published in SCOPUS Indexed AIP/IEEE/Springer Conference Proceedings.</span><br/> Authors are invited to submit high-quality research papers aligned with the conference topics, including but not limited to:</p>
                </div>
                <div className="callForPapers-topics">
                    <div className="topic-card">
                        <div className="topic-image">
                            <img src={img1} alt="Artificial Intelligence & Machine Learning" />
                        </div>
                        <div className="topic-content">
                            <h2>Track 1 : Artificial Intelligence & Machine Learning</h2>
                            <ul>
                                <li>&bull; Deep Learning and Neural Networks</li>
                                <li>&bull; AI for Edge Computing and IoT</li>
                                <li>&bull; Reinforcement Learning and Robotics</li>
                                <li>&bull; Natural Language Processing and Speech Recognition</li>
                                <li>&bull; AI for Smart Cities and Sustainable Development</li>
                                <li>&bull; AI Ethics, Fairness, and Explainability</li>
                            </ul>
                        </div>
                    </div>
                    <div className="topic-card">
                        <div className="topic-image">
                            <img src={img2} alt="Embedded Systems & Internet of Things (IoT)" />
                        </div>
                        <div className="topic-content">
                            <h2>Track 2 : Embedded Systems & Internet of Things (IoT)</h2>
                            <ul>
                                <li>&bull; Embedded AI and TinyML</li>
                                <li>&bull; IoT for Smart Healthcare and Industry 4.0</li>
                                <li>&bull; Wireless Sensor Networks and Edge Computing</li>
                                <li>&bull; Secure and Energy-Efficient IoT Systems</li>
                                <li>&bull; Digital Twins for Industrial Automation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="topic-card">
                        <div className="topic-image">
                            <img src={img3} alt="Electronics & VLSI" />
                        </div>
                        <div className="topic-content">
                            <h2>Track 3 : Electronics & VLSI</h2>
                            <ul>
                                <li>&bull; Low-Power VLSI and Nanoelectronics</li>
                                <li>&bull; FPGA-Based System Design</li>
                                <li>&bull; MEMS and Sensors for Smart Applications</li>
                                <li>&bull; 5G and 6G Communication Circuits</li>
                                <li>&bull; Neuromorphic and Quantum Computing Circuits</li>
                            </ul>
                        </div>
                    </div>
                    <div className="topic-card">
                        <div className="topic-image">
                            <img src={img4} alt="Computer Science & Cybersecurity" />
                        </div>
                        <div className="topic-content">
                            <h2>Track 4 : Computer Science & Cybersecurity</h2>
                            <ul>
                                <li>&bull; Cloud and Edge Computing Architectures</li>
                                <li>&bull; Blockchain for Secure Transactions</li>
                                <li>&bull; Quantum Computing and Cryptography</li>
                                <li>&bull; Cybersecurity and Privacy in AI Systems</li>
                                <li>&bull; Software Engineering and DevOps</li>
                            </ul>
                        </div>
                    </div>
                    <div className="topic-card">
                        <div className="topic-image">
                            <img src={img5} alt="Power Systems & Renewable Energy" />
                        </div>
                        <div className="topic-content">
                            <h2>Track 5 : Power Systems & Renewable Energy</h2>
                            <ul>
                                <li>&bull; Smart Grids and Energy Storage Technologies</li>
                                <li>&bull; AI for Renewable Energy Optimization</li>
                                <li>&bull; Electric Vehicles and Charging Infrastructure</li>
                                <li>&bull; Energy-Efficient Computing and Green Electronics</li>
                                <li>&bull; Power Electronics for Sustainable Energy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="topic-card">
                        <div className="topic-image">
                            <img src={img6} alt="Signal Processing & Communication Technologies" />
                        </div>
                        <div className="topic-content">
                            <h2>Track 6 : Signal Processing & Communication Technologies</h2>
                            <ul>
                                <li>&bull; 5G, 6G, and Beyond: Emerging Technologies</li>
                                <li>&bull; AI-Enabled Wireless Communication</li>
                                <li>&bull; Image and Video Processing Applications</li>
                                <li>&bull; Satellite and Optical Communication Networks</li>
                                <li>&bull; Software-Defined Radio and Cognitive Networks</li>
                            </ul>
                        </div>
                    </div>
                    <div className="topic-card">
                        <div className="topic-image">
                            <img src={img7} alt="Control Systems & Robotics" />
                        </div>
                        <div className="topic-content">
                            <h2>Track 7 : Control Systems & Robotics</h2>
                            <ul>
                                <li>&bull; Autonomous Systems and Drones</li>
                                <li>&bull; AI-Based Industrial Automation</li>
                                <li>&bull; Human-Robot Interaction and Assistive Robotics</li>
                                <li>&bull; Digital Twins for Predictive Maintenance</li>
                                <li>&bull; Smart Manufacturing and Industry 4.0</li>
                            </ul>
                        </div>
                    </div>
                    <div className="topic-card">
                        <div className="topic-image">
                            <img src={img8} alt="Smart and Sustainable Technologies" />
                        </div>
                        <div className="topic-content">
                            <h2>Track 8 : Smart and Sustainable Technologies</h2>
                            <ul>
                                <li>&bull; AI for Climate Change Mitigation</li>
                                <li>&bull; Digital Transformation for Sustainable Development</li>
                                <li>&bull; Smart Agriculture and Precision Farming</li>
                                <li>&bull; Green AI and Sustainable Computing</li>
                                <li>&bull; Smart Transportation and Urban Planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="callForPapers-cta">
                    <a href="#" className="cta-button">Submit Paper</a>
                </div>
            </div>
            <div className="sidebar">
                <div className="sidebar-section">
                    <h3><FaCalendarAlt />Important Dates</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaPaperPlane /></div>
                            <div className="timeline-content">
                                <strong>Paper Submission Deadline</strong>
                                <p>May 31, 2025</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaBell /></div>
                            <div className="timeline-content">
                                <strong>Notification of Acceptance</strong>
                                <p>June 10, 2025</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaCamera /></div>
                            <div className="timeline-content">
                                <strong>Camera-Ready Submission</strong>
                                <p>June 18, 2025</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaCalendarMinus /></div>
                            <div className="timeline-content">
                                <strong>Conference Date</strong>
                                <p>July 18, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-section">
                    <h3><i className="fa-solid fa-share-nodes"></i> Follow Us</h3>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/school/kprietonline/posts/" className="download-link" target='blank'><FaLinkedin />Linked In</a>
                        <a href="https://www.instagram.com/kprietonline/" className="download-link" target='blank'><FaInstagram />Instagram</a>
                        <a href="https://kpriet.ac.in/" className="download-link" target='blank'><FaGlobe />Website</a>
                    </div>
                </div>

                <div className="sidebar-section">
                    <h3><i className="fa-solid fa-download"></i> More Details</h3>
                    <div className="download-links">
                        <a href="https://drive.google.com/file/d/18rZ194D-BlNOfBFEkEv3s21ybQ2DM7Kz/vi" className="download-link" target='blank'><FaFileDownload /> Brochure</a>
                        <a href="./Guidelines" className="download-link"><FaFileWord /> Submission Guidelines</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Call;