import "../styles/home.css";
import Countdown from "./timer";
import Slider from "./slider";
import bgposter from "../assets/bg-poster.png";
import Sidebar from './sidebar';


function Home() {
  return (
    <>
      <div className="main_container">
        <div className="container">
          <img src={bgposter} alt="" />
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
