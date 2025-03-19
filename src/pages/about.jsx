import '../styles/about.css'
import quantum from '../assets/quantum.png'
import kpr_group from '../assets/kpr_group.png'
import kprcas from '../assets/kprcas.png'
import audi from '../assets/audi.png'
import kpr_ias from '../assets/kpr_ias.png'
import kpriet from '../assets/kpriet.png'
import sugar_mill from '../assets/sugar_mill.png'
import faso from '../assets/faso.png'



function About() {
    return (
        <div className="about_container">
            <div className="about_institution">
                <h1>About KPR institution</h1>
                <p><span>KPRIET</span> - KPR Institute of Engineering and Technology was established in the year <span>2009</span>. KPRIET is a <span>top-notch institute with a strength of 260 eminent faculty members, 3,500 students and 280 administrative and support staff</span>. A self-contained campus, located in a <span>lush green environment of about 66 acres</span>, lies in the suburbs of Coimbatore, a metropolitan city of Tamil Nadu, a southern Indian state. The Institute has <span>12 academic departments with cutting-edge research centres</span> in a variety of engineering and pure science disciplines, encompassing nearly <span>65 laboratories</span>. Centres of excellence at KPRIET focus on providing transformative learning-edge knowledge through training programmes in wide arena turning out industry-ready graduates. The training programmes offered would ensure that the students are trained in accordance to the diversified needs and <span>lazoomicon technologies</span> for upgrading their technical skill. KPRIET houses <span>smart classrooms, well-equipped laboratories with state-of-the-art infrastructure, unlimited high-speed wireless internet connectivity</span>, auditoriums and seminar halls with quality audio-visual systems that enables a pursuit of intelligibility and a centralized library with a huge repository, athletics, playground and gym facilities to enhance physical and mental abilities of the students and faculty. Academic alliance and Memoranda of Understanding with various <span>International and National Universities</span>, and industries facilitate global education amidst the learners of KPRIET. The alliances promote exchange of students, faculty and industrial experts and encourage joint research projects for mutual benefits. Students pursuing their research projects in Universities and industries have brought remarkable laurels to the Institution. The Institution has been <span>accredited by NAAC and recognized by Department of Scientific and Industrial Research (DSIR)</span>.</p>
                <h1>KPR Groups include :</h1>
                <div className="about_logos">
                    <div className="logo">
                        <img src={quantum} />
                        <p>KPR Quantum knits</p>
                    </div>
                    <div className="logo">
                        <img src={kpr_group} />
                        <p>KPR Group of Company</p>
                    </div>
                    <div className="logo">
                        <img src={kprcas} />
                        <p>KPRCAS Institutions</p>
                    </div>
                    <div className="logo">
                        <img src={audi} />
                        <p>Audi Showroom</p>
                    </div>
                    <div className="logo">
                        <img src={kpr_ias} />
                        <p>KPRIAS Academy</p>
                    </div>
                    <div className="logo">
                        <img src={kpriet} />
                        <p>KPRIET Institutions</p>
                    </div>
                    <div className="logo">
                        <img src={sugar_mill} />
                        <p>KPR Sugar Mill Limited</p>
                    </div>
                    <div className="logo">
                        <img src={faso} />
                        <p>KPR Faso Mens wear</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="about_spark">
                <h1>About SPARK’25</h1>
                <p>The <span>International Conference on Smart Systems, Power Electronics, Artificial Intelligence, Robotics, and Knowledge Engineering (SPARK 2025)</span> is a premier platform that brings together researchers, academicians, industry professionals, and students to explore cutting-edge advancements in <span>AI, robotics, power electronics, smart systems, and knowledge engineering.</span> The conference fosters knowledge exchange, research collaboration, and networking, aiming to address real-world challenges through technological innovation. With keynote speeches from global experts, technical paper presentations, hands-on workshops, and industry panel discussions, SPARK 2025 provides an opportunity to engage with the latest trends shaping the future of smart and sustainable technologies.
                    <br /><br />Authors are invited to submit high-quality research papers across diverse topics, including <span>Artificial Intelligence & Machine Learning, Embedded Systems & IoT, VLSI & Electronics, Power Systems & Renewable Energy, Cybersecurity, Robotics, and Smart Technologies.</span> Selected papers will be published in Scopus-indexed AIP proceedings, with opportunities for extended versions in reputed journals. The conference also promotes interdisciplinary research and industry collaborations, ensuring a dynamic platform for academia and industry professionals to drive innovation and technological advancements. <span>Join SPARK 2025</span> to be a part of the future of intelligent and sustainable systems</p>
            </div>
            <hr />
            <div className="about_ece">
                <h1>About ECE</h1>
                <p>The Department of Electronics & Communication Engineering was established in <span>2009</span> with the primary goal of providing young individuals with the necessary technical knowledge and professional skills to tackle the challenges in the rapidly evolving field of Electronics and Communication Engineering while promoting research in this area. The department offers a <span>Bachelor of Engineering (B.E) Program in Electronics and Communication Engineering</span>, as well as a <span>Master of Engineering (M.E) Program in VLSI design</span>. The <span>B.E-ECE program is accredited by the National Board of Accreditation (NBA)</span>, and the department is <span>recognized as a research centre by Anna University</span>.
                    The department is committed to not only updating the curriculum but also enhancing its laboratory facilities to keep pace with the latest advancements in state-of-the-art technologies. Some notable additions include the <span>Centre for Smart Antenna Systems and Measurements</span>, an <span>industry-driven IoT Centre</span>, and a specialized laboratory for <span>PCB Design and Manufacturing</span>.</p>
            </div>
            <hr />
            <div className="about_eee">
                <h1>About EEE</h1>
                <p>The <span>Department of Electrical and Electronics Engineering (EEE)</span> at KPRIET is committed to excellence in power systems, renewable energy, automation, and smart grids. With a strong foundation in <span>electrical machines, power electronics, control systems, and IoT-based automation</span>, the department equips students with industry-relevant skills.
                    <br /><br />Students benefit from modern laboratories, research centers, and hands-on training through projects, industrial collaborations, and internships. The curriculum integrates AI, energy management, electric vehicles (EVs), and sustainable power solutions, ensuring graduates are prepared for future technological advancements. The department fosters entrepreneurship, innovation, and interdisciplinary research while maintaining strong industry connections. Through <span>technical events, workshops, and placement support</span>, EEE at KPRIET shapes professionals ready to drive advancements in power, automation, and smart energy solutions.</p>
            </div>
        </div>
    )
}

export default About;