import '../styles/call.css'
import { FaLinkedin, FaTwitter, FaPhone, FaCalendarAlt, FaPaperPlane, FaCamera, FaBell, FaCalendarMinus, FaFileDownload, FaFileWord } from "react-icons/fa"
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'

function Call() {
    return (
        <div class="callForPapers">
            <div class="callForPapers-content">
                <div class="callForPapers-header">
                    <h1>Call for Papers</h1>
                    <p>Authors are invited to submit high-quality research papers aligned with the conference topics, including but not limited to:</p>
                </div>
                <div class="callForPapers-topics">
                    <div class="topic-card">
                        <div class="topic-image">
                            <img src={img1} alt="Artificial Intelligence & Machine Learning" />
                        </div>
                        <div class="topic-content">
                            <h2>Track 1. Artificial Intelligence & Machine Learning</h2>
                            <ul>
                                <li>Deep Learning and Neural Networks</li>
                                <li>AI for Edge Computing and IoT</li>
                                <li>Reinforcement Learning and Robotics</li>
                                <li>Natural Language Processing and Speech Recognition</li>
                                <li>AI for Smart Cities and Sustainable Development</li>
                                <li>AI Ethics, Fairness, and Explainability</li>
                            </ul>
                        </div>
                    </div>
                    <div class="topic-card">
                        <div class="topic-image">
                            <img src={img2} alt="Embedded Systems & Internet of Things (IoT)" />
                        </div>
                        <div class="topic-content">
                            <h2>Track 2. Embedded Systems & Internet of Things (IoT)</h2>
                            <ul>
                                <li>Embedded AI and TinyML</li>
                                <li>IoT for Smart Healthcare and Industry 4.0</li>
                                <li>Wireless Sensor Networks and Edge Computing</li>
                                <li>Secure and Energy-Efficient IoT Systems</li>
                                <li>Digital Twins for Industrial Automation</li>
                            </ul>
                        </div>
                    </div>
                    <div class="topic-card">
                        <div class="topic-image">
                            <img src={img3} alt="Electronics & VLSI" />
                        </div>
                        <div class="topic-content">
                            <h2>Track 3. Electronics & VLSI</h2>
                            <ul>
                                <li>Low-Power VLSI and Nanoelectronics</li>
                                <li>FPGA-Based System Design</li>
                                <li>MEMS and Sensors for Smart Applications</li>
                                <li>5G and 6G Communication Circuits</li>
                                <li>Neuromorphic and Quantum Computing Circuits</li>
                            </ul>
                        </div>
                    </div>
                    <div class="topic-card">
                        <div class="topic-image">
                            <img src={img4} alt="Computer Science & Cybersecurity" />
                        </div>
                        <div class="topic-content">
                            <h2>Track 4. Computer Science & Cybersecurity</h2>
                            <ul>
                                <li>Cloud and Edge Computing Architectures</li>
                                <li>Blockchain for Secure Transactions</li>
                                <li>Quantum Computing and Cryptography</li>
                                <li>Cybersecurity and Privacy in AI Systems</li>
                                <li>Software Engineering and DevOps</li>
                            </ul>
                        </div>
                    </div>
                    <div class="topic-card">
                        <div class="topic-image">
                            <img src={img5} alt="Power Systems & Renewable Energy" />
                        </div>
                        <div class="topic-content">
                            <h2>Track 5. Power Systems & Renewable Energy</h2>
                            <ul>
                                <li>Smart Grids and Energy Storage Technologies</li>
                                <li>AI for Renewable Energy Optimization</li>
                                <li>Electric Vehicles and Charging Infrastructure</li>
                                <li>Energy-Efficient Computing and Green Electronics</li>
                                <li>Power Electronics for Sustainable Energy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="topic-card">
                        <div class="topic-image">
                            <img src={img6} alt="Signal Processing & Communication Technologies" />
                        </div>
                        <div class="topic-content">
                            <h2>Track 6. Signal Processing & Communication Technologies</h2>
                            <ul>
                                <li>5G, 6G, and Beyond: Emerging Technologies</li>
                                <li>AI-Enabled Wireless Communication</li>
                                <li>Image and Video Processing Applications</li>
                                <li>Satellite and Optical Communication Networks</li>
                                <li>Software-Defined Radio and Cognitive Networks</li>
                            </ul>
                        </div>
                    </div>
                    <div class="topic-card">
                        <div class="topic-image">
                            <img src={img7} alt="Control Systems & Robotics" />
                        </div>
                        <div class="topic-content">
                            <h2>Track 7. Control Systems & Robotics</h2>
                            <ul>
                                <li>Autonomous Systems and Drones</li>
                                <li>AI-Based Industrial Automation</li>
                                <li>Human-Robot Interaction and Assistive Robotics</li>
                                <li>Digital Twins for Predictive Maintenance</li>
                                <li>Smart Manufacturing and Industry 4.0</li>
                            </ul>
                        </div>
                    </div>
                    <div class="topic-card">
                        <div class="topic-image">
                            <img src={img8} alt="Smart and Sustainable Technologies" />
                        </div>
                        <div class="topic-content">
                            <h2>Track 8. Smart and Sustainable Technologies</h2>
                            <ul>
                                <li>AI for Climate Change Mitigation</li>
                                <li>Digital Transformation for Sustainable Development</li>
                                <li>Smart Agriculture and Precision Farming</li>
                                <li>Green AI and Sustainable Computing</li>
                                <li>Smart Transportation and Urban Planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="callForPapers-cta">
                    <a href="#" class="cta-button">Submit Paper</a>
                </div>
            </div>
            <div class="sidebar">
                <div class="sidebar-section">
                    <h3><FaCalendarAlt />Important Dates</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-icon"><FaPaperPlane /></div>
                            <div class="timeline-content">
                                <strong>Paper Submission Deadline</strong>
                                <p>May 31, 2025</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon"><FaBell /></div>
                            <div class="timeline-content">
                                <strong>Notification of Acceptance</strong>
                                <p>June 10, 2025</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon"><FaCamera /></div>
                            <div class="timeline-content">
                                <strong>Camera-Ready Submission</strong>
                                <p>July 18, 2025</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon"><FaCalendarMinus /></div>
                            <div class="timeline-content">
                                <strong>Conference Date</strong>
                                <p>July 18, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sidebar-section">
                    <h3><i class="fa-solid fa-share-nodes"></i> Follow Us</h3>
                    <div class="social-links">
                        <a href="#" class="download-link"><FaLinkedin />Linked In</a>
                        <a href="#" class="download-link"><FaTwitter />Twitter</a>
                        <a href="#" class="download-link"><FaPhone />Phone</a>
                    </div>
                </div>

                <div class="sidebar-section">
                    <h3><i class="fa-solid fa-download"></i> More Details</h3>
                    <div class="download-links">
                        <a href="#" class="download-link"><FaFileDownload /> Brochure</a>
                        <a href="#" class="download-link"><FaFileWord /> Submission Guidelines</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Call;