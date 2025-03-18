import "../styles/home.css";
import Countdown from "./timer";
import Slider from "./slider";
import conf1 from "../assets/conf-1.png";
import Sidebar from './sidebar';


function Home() {
  return (
    <>
      <div className="main_container">
        <div className="container">
          <div className="container-text">
            <h1>Conference Date : 18 July 2025</h1>
            <h2>
              International Conference on Smart Systems, Power Electronics, Artificial Intelligence, Robotics, and Knowledge Engineering
            </h2>
            <p>
              Department of Electrical and Electronics Engineering [EEE] and Electronics and Communication Engineering [ECE]
            </p>
          </div>
          <img src={conf1} alt="" />
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
