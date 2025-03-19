import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/kpr_main_logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close dropdowns when menu toggles
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
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
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/Home" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/About-Us" onClick={toggleMenu}>About Us</Link></li>

          {/* Committee Dropdown */}
          <li className="dropdown-container" onClick={() => toggleDropdown("committee")}>
            Committee <span> &#x2B9F;</span>
            <div className={`dropdown ${openDropdown === "committee" ? "open" : ""}`}>
              <Link to="/Committees" onClick={toggleMenu}><p>Committees</p></Link>
              <Link onClick={toggleMenu}><p>Special Technical Committees</p></Link>
            </div>
          </li>

          <li><Link to="/Guidelines" onClick={toggleMenu}>Guidelines</Link></li>
          <li><Link to="/Call-for-papers" onClick={toggleMenu}>Call for Papers</Link></li>
          <li><Link to="/Speakers" onClick={toggleMenu}>Speakers</Link></li>

          {/* Attend Dropdown */}
          <li className="dropdown-container" onClick={() => toggleDropdown("attend")}>
            Attend <span>&#x2B9F;</span>
            <div className={`dropdown ${openDropdown === "attend" ? "open" : ""}`}>
              <Link to="/Explore" onClick={toggleMenu}><p>Explore Tamil Nadu</p></Link>
              <Link to="/Venue" onClick={toggleMenu}><p>Conference Venue</p></Link>
              <Link to="/Accommodation" onClick={toggleMenu}><p>Accommodation</p></Link>
            </div>
          </li>

          {/* Registration Dropdown */}
          <li className="dropdown-container" onClick={() => toggleDropdown("registration")}>
            Registration <span>&#x2B9F;</span>
            <div className={`dropdown ${openDropdown === "registration" ? "open" : ""}`}>
              <Link to="https://googleformlink" target="_blank" onClick={toggleMenu}><p>Register</p></Link>
              <Link to="https://drive.google.com/file/d/18rZ194D-BlNOfBFEkEv3s21ybQ2DM7Kz/vi" target="_blank" onClick={toggleMenu}><p>Download Brochure</p></Link>
              <Link onClick={toggleMenu}><p>Workshops</p></Link>
            </div>
          </li>

          <li><Link to="/Plagiarism-Policy" onClick={toggleMenu}>Plagiarism Policy</Link></li>
          <li><Link to="/Contact-Us" onClick={toggleMenu}>Contact Us</Link></li>
          <li className="btn"><Link onClick={toggleMenu}>Submit Paper</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
