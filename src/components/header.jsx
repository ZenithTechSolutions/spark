import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/kpr_main_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close dropdowns when menu opens/closes
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleItemClick = () => {
    setIsMenuOpen(false); // Close menu when any item is clicked
    setOpenDropdown(null); // Close all dropdowns
  };

  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? null : <FaBars />}
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
          <li className="hamburger" style={{ color: "white" }} onClick={toggleMenu}>
            <FaTimes />
          </li>
          <li><Link to="/Home" onClick={handleItemClick}>Home</Link></li>
          <li><Link to="/About-Us" onClick={handleItemClick}>About Us</Link></li>

          {/* Committee */}
          <li><Link to="/Committees" onClick={handleItemClick}>Committees</Link></li>

          <li><Link to="/Guidelines" onClick={handleItemClick}>Guidelines</Link></li>
          <li><Link to="/Call-for-papers" onClick={handleItemClick}>Call for Papers</Link></li>
          <li><Link to="/Speakers" onClick={handleItemClick}>Speakers</Link></li>

          {/* Attend Dropdown */}
          <li className="dropdown-container">
            <span onClick={() => toggleDropdown("attend")}>Attend &#x2B9F;</span>
            {openDropdown === "attend" && (
              <div className="dropdown">
                <Link to="/Explore" onClick={handleItemClick}><p>Explore Tamil Nadu</p></Link>
                <Link to="/Venue" onClick={handleItemClick}><p>Conference Venue</p></Link>
                <Link to="/Accommodation" onClick={handleItemClick}><p>Accommodation</p></Link>
              </div>
            )}
          </li>

          {/* Registration Dropdown */}
          <li className="dropdown-container">
            <span onClick={() => toggleDropdown("registration")}>Registration &#x2B9F;</span>
            {openDropdown === "registration" && (
              <div className="dropdown">
                <Link to="/Register" onClick={handleItemClick}><p>Register</p></Link>
                <Link to="https://drive.google.com/file/d/18rZ194D-BlNOfBFEkEv3s21ybQ2DM7Kz/vi" target="_blank" onClick={handleItemClick}>
                  <p>Download Brochure</p>
                </Link>
                <Link onClick={handleItemClick}><p>Workshops</p></Link>
              </div>
            )}
          </li>

          <li><Link to="/Plagiarism-Policy" onClick={handleItemClick}>Plagiarism Policy</Link></li>
          <li><Link to="/Contact-Us" onClick={handleItemClick}>Contact Us</Link></li>
          <li className="btn"><Link onClick={handleItemClick}>Submit Paper</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
