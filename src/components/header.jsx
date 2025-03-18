import '../styles/header.css'
import { Link } from 'react-router-dom'
import logo from '../assets/kpr_main_logo.png'



function Header() {
    return (
        <>
            <div className='header'>
                <div className="header_content">
                    <p>International Conference on Smart Systems, Power Electronics Artificial Intelligence, Robotics and
                        Knowledge Engineering(SPARK'25)
                    </p>
                    <img src={logo} alt="KPRIET LOGO" />
                </div>
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/About-Us'>About Us</Link></li>
                    <li className='dropdown-container'>
                        Committee   <span> &#x2B9F;</span>
                        <div className='dropdown'>
                            <Link to='/Committees'>committees</Link>
                            <Link >Speacial Technical Committees</Link>
                        </div>
                    </li>
                    <li><Link to='/Guidelines'>Guidelines</Link></li>
                    <li><Link to='/Call-for-papers'>Call for Papers</Link></li>
                    <li><Link to='/Speakers'>Speakers</Link></li>
                    <li className='dropdown-container'>
                        Attend  <span>&#x2B9F;</span>
                        <div className="dropdown">
                            <Link to='/Explore'>Explore Tamil Nadu</Link>
                            <Link to='/Venue' >Conference Venue</Link>
                            <Link to='/Accommodation'>Accomodation</Link>
                        </div>
                    </li>
                    <li className='dropdown-container'>
                        Registration <span>&#x2B9F;</span>
                        <div className='dropdown'>
                            <Link >Register</Link>
                            <Link >Download Brochure</Link>
                            <Link >Workshops</Link>
                        </div>
                    </li>
                    <li><Link to='/Plagiarism-Policy'>Plagiarism Policy</Link></li>
                    <li><Link to='/Contact-Us'>Contact Us</Link></li>
                    <li className='btn'><Link>Submit Paper</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
