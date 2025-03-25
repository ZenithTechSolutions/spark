import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/kpr_main_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menu,setMenu]=useState(true)
  const [hamclick,setHamClick]=useState(false)
  const isMenuOpen=()=>{
    setMenu(!menu)
  }
  const hamMenu=()=>{
    setHamClick(!hamclick)
  }
  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="hamburger"  onClick={hamMenu}>
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
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About-Us" >About Us</Link></li>

          {/* Committee */}
          <li><Link to="/Committees" >Committees</Link></li>

          <li><Link to="/Guidelines" >Guidelines</Link></li>
          <li><Link to="/Call-for-papers">Call for Papers</Link></li>
          <li><Link to="/Speakers">Speakers</Link></li>

          {/* Attend Dropdown */}
          <li className={menu ? "dropdown-container-on" : "dropdown-container-off"}>
          <span>Attend &#x2B9F;</span>
              <div className="dropdown">
                <Link to="/Explore"><p>Explore Tamil Nadu</p></Link>
                <Link to="/Venue"><p>Conference Venue</p></Link>
                <Link to="/Accommodation" ><p>Accommodation</p></Link>
              </div>
          </li>

          {/* Registration Dropdown */}
          <li className={menu ? "dropdown-container-on" : "dropdown-container-off"}>
            <span>Registration &#x2B9F;</span>
              <div className="dropdown">
                <Link to="/Register"><p>Register</p></Link>
                <Link to="https://drive.google.com/file/d/18rZ194D-BlNOfBFEkEv3s21ybQ2DM7Kz/vi" target="_blank">
                  <p>Download Brochure</p>
                </Link>
                <Link><p>Workshops</p></Link>
              </div>
          </li>

          <li><Link to="/Plagiarism-Policy">Plagiarism Policy</Link></li>
          <li><Link to="/Contact-Us">Contact Us</Link></li>
          <li className="btn"><Link >Submit Paper</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
