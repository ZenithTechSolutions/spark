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
                            <Link to='/Committees'><p>Committees</p></Link>
                            <Link ><p>Special Technical Committees</p></Link>
                        </div>
                    </li>
                    <li><Link to='/Guidelines'>Guidelines</Link></li>
                    <li><Link to='/Call-for-papers'>Call for Papers</Link></li>
                    <li><Link to='/Speakers'>Speakers</Link></li>
                    <li className='dropdown-container'>
                        Attend  <span>&#x2B9F;</span>
                        <div className="dropdown">
                            <Link to='/Explore'><p>Explore Tamil Nadu</p></Link>
                            <Link to='/Venue' ><p>Conference Venue</p></Link>
                            <Link to='/Accommodation'><p>Accomodation</p></Link>
                        </div>
                    </li>
                    <li className='dropdown-container'>
                        Registration <span>&#x2B9F;</span>
                        <div className='dropdown'>
                            <Link ><p>Register</p></Link>
                            <Link ><p>Download Brochure</p></Link>
                            <Link ><p>Workshops</p></Link>
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
