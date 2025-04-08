import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/kpr_main_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [hamclick, setHamClick] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const hamMenu = () => {
    setHamClick(!hamclick)
    setActiveDropdown(null);
  };
  const toggleDropdown = (e, dropdown) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
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
          <li onClick={(e)=>toggleDropdown(e,"attend")} className="dropdown-container">
            <Link>Attend &#x2B9F;</Link>
            <div className={activeDropdown==="attend" ? "dropdown-show" : "dropdown-hide"} >
              <Link to="/Explore" onClick={hamMenu}><p>Explore South India</p></Link>
              <Link to="/Venue" onClick={hamMenu}><p>Conference Venue</p></Link>
              <Link to="/Accommodation" onClick={hamMenu}><p>Accommodation</p></Link>
            </div>
          </li>

          {/* Registration Dropdown */}
          <li onClick={(e)=>toggleDropdown(e,"regis")} className="dropdown-container">
            <Link>Register &#x2B9F;</Link>
            <div className={activeDropdown==="regis" ? "dropdown-show" : "dropdown-hide"} >
              <Link to="/Register" onClick={hamMenu}><p>Register</p></Link>
              <Link to="https://drive.google.com/file/d/18rZ194D-BlNOfBFEkEv3s21ybQ2DM7Kz/vi" target="_blank" onClick={hamMenu}>
                <p>Download Brochure</p>
              </Link>
            </div>
          </li>

          <li><Link to="/Plagiarism-Policy" onClick={hamMenu}>Plagiarism Policy</Link></li>
          <li><Link to="/Contact-Us" onClick={hamMenu}>Contact Us</Link></li>
          <li className="btn"><Link to="https://forms.gle/axGvHTnTHuhFuZdTA" onClick={hamMenu}>Submit Paper</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
