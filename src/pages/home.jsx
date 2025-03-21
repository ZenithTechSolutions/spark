import "../styles/home.css";
import Countdown from "./timer";
import Slider from "./slider";
import bgposter from "../assets/bg-poster-kpr.png";
import Sidebar from './sidebar';


function Home() {
  return (
    <>
      <div className="main_container">
          <img src={bgposter} alt="" />
        <div className="container">
        </div>
        <hr />
        <Slider />
        <hr />
        <div className="important">
          <Countdown />
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
