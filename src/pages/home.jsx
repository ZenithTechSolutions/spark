import "../styles/home.css";
import Countdown from "./timer";
import Slider from "./slider";
import bgposter from "../assets/bg-poster-kpr (1).png";
import Sidebar from './sidebar';


function Home() {
  return (
    <>
      <div className="main_container">
        <div className="container">
          <img src={bgposter} alt="" />
        </div>
        <hr />
        <div className="home">
        <div className="home-content">
          <h2>About SPARK'25</h2>
          <p>The International Conference on Smart Systems, Power Electronics, Artificial Intelligence, Robotics, and Knowledge Engineering (SPARK'25) is a prestigious event organized by KPR Institute of Engineering and Technology (KPRIET). This conference serves as a dynamic platform for researchers, academicians, industry professionals, and students to showcase their latest findings and advancements in smart systems, power electronics, AI, robotics, and knowledge engineering.</p>
          <p>With rapid technological evolution, fields such as machine learning, IoT, renewable energy systems, autonomous robotics, and cybersecurity are driving innovation across industries. SPARK'25 aims to facilitate insightful discussions, knowledge sharing, and collaboration through keynote addresses, technical sessions, and interactive workshops led by experts.</p>
          <p>We warmly welcome all researchers, scholars, and technology enthusiasts to be a part of SPARK'25 at KPRIET. Join us as we explore groundbreaking ideas, spark innovation, and shape the future of technology.</p>
        </div>
          <Sidebar />
        </div>
        <hr />

        <Slider />
        <hr />
        <div className="important">
          <Countdown />
        </div>
      </div>
    </>
  );
}

export default Home;
