import "../styles/home.css";
import Countdown from "./timer";
import conf1 from "../assets/conf-1.png";

function Home() {
  return (
    <>
      <div className="container">
        <div className="container-text">
          <p>Date : 15 July 2025 and 16 July 2025</p>
          <h1>
            International Conference on Smart Systems, Power Electronics, Artificial Intelligence, Robotics, and Knowledge Engineering
          </h1>
          <p>
            Department of Electrical and Electronics Engineering [EEE] and Electronics and Communication Engineering [ECE]
          </p>
        </div>
        <img src={conf1} alt="" width='500px' />
      </div>
      <hr />
      <Countdown />
    </>
  );
}

export default Home;
