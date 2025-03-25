import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/kpr_main_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [hamclick, setHamClick] = useState(false);
  const [attend, setAttend] = useState(false);
  const [regis, setRegis] = useState(false);

  const hamMenu = () => {setHamClick(!hamclick)
    setAttend(false); 
    setRegis(false);
  };
  const attendClick = () => {setAttend(!attend)
    setRegis(false);
  };
  const regisClick = () => {setRegis(!regis)
    setAttend(false);
  };

  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="hamburger" onClick={hamMenu}>
            <FaBars />
          </div>
          <p>
            International Conference on Smart Systems, Power Electronics
            Artificial Intelligence, Robotics and Knowledge Engineering
            (SPARK'25)
          </p>
          <img src={logo} alt="KPRIET LOGO" />
        </div>
      </div>

      {/* Navbar Section */}
      <nav className={hamclick ? "navbar-open" : "navbar"}>
        <ul>
          <li className="hamburger" onClick={hamMenu} style={{ color: "white" }}>
            <FaTimes />
          </li>
          <li><Link to="/Home" onClick={hamMenu}>Home</Link></li>
          <li><Link to="/About-Us" onClick={hamMenu}>About Us</Link></li>
          <li><Link to="/Committees" onClick={hamMenu}>Committees</Link></li>
          <li><Link to="/Guidelines" onClick={hamMenu}>Guidelines</Link></li>
          <li><Link to="/Call-for-papers" onClick={hamMenu}>Call for Papers</Link></li>
          <li><Link to="/Speakers" onClick={hamMenu}>Speakers</Link></li>

          {/* Attend Dropdown */}
          <li onClick={ attendClick} className="dropdown-container">
            <Link>Attend &#x2B9F;</Link>
            <div className={attend ? "dropdown-show" : "dropdown-hide"} >
              <Link to="/Explore" onClick={hamMenu}><p>Explore Tamil Nadu</p></Link>
              <Link to="/Venue" onClick={hamMenu}><p>Conference Venue</p></Link>
              <Link to="/Accommodation" onClick={hamMenu}><p>Accommodation</p></Link>
            </div>
          </li>

          {/* Registration Dropdown */}
          <li onClick={regisClick} className="dropdown-container">
            <Link>Registration \/;</Link>
            <div className={regis ? "dropdown-show" : "dropdown-hide"}>
              <Link to="/Register" onClick={hamMenu}><p>Register</p></Link>
              <Link to="https://drive.google.com/file/d/18rZ194D-BlNOfBFEkEv3s21ybQ2DM7Kz/vi" target="_blank" onClick={hamMenu}>
                <p>Download Brochure</p>
              </Link>
              <Link to="/Workshops" onClick={hamMenu}><p>Workshops</p></Link>
            </div>
          </li>

          <li><Link to="/Plagiarism-Policy" onClick={hamMenu}>Plagiarism Policy</Link></li>
          <li><Link to="/Contact-Us" onClick={hamMenu}>Contact Us</Link></li>
          <li className="btn"><Link to="/Submit-Paper" onClick={hamMenu}>Submit Paper</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
