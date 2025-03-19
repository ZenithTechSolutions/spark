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
                <p><span>KPRIET</span> - Founded in 2009, KPRIET is a leading institution excelling in innovation, research, and industry collaboration. With 260 faculty members, 3,500 students, and 280 staff, it offers 12 academic departments and 65+ advanced laboratories on a 66-acre green campus in Coimbatore. The institute provides smart classNamerooms, high-tech labs, auditoriums, a library, sports facilities, and quality hostel accommodations. KPRIET fosters entrepreneurship, industrial consultancy, and CSR initiatives while promoting global learning through academic alliances. Committed to excellence, it prepares students to become industry-ready professionals and socially responsible innovators.</p>
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
                <p>The <span>Department of Electronics and Communication Engineering (ECE)</span> at KPRIET is dedicated to fostering innovation, research, and technological excellence. With a strong emphasis on <span>embedded systems, VLSI, communication networks, signal processing, and the Internet of Things (IoT)</span>, the department prepares students for the rapidly evolving tech industry.
                    <br /><br />Equipped with state-of-the-art laboratories, research centers, and industry collaborations, the department ensures hands-on learning experiences. Students benefit from expert faculty, industry-driven curriculum, and exposure to real-world applications through <span>projects, internships, and workshops.</span> The department actively engages in <span>AI, robotics, wireless communication, and 5G technologies</span>, offering opportunities for research and development. ECE at KPRIET promotes entrepreneurship, innovation, and interdisciplinary collaborations to develop industry-ready engineers. With strong academic alliances, technical events, and placement support, graduates emerge as skilled professionals contributing to advancements in electronics, automation, and smart technologies.</p>
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