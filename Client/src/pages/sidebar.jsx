import React from 'react'
import '../styles/sidebar.css'
import { FaCalendarAlt, FaPaperPlane, FaBell, FaCamera, FaCalendarMinus, FaLinkedin, FaTwitter, FaPhone, FaFileDownload, FaFileWord } from 'react-icons/fa'
function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebar-section">
        <h3><FaCalendarAlt />Important Dates</h3>
        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-icon"><FaPaperPlane /></div>
                <div className="timeline-content">
                    <strong>Paper Submission Deadline</strong>
                    <p>May 31, 2025</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-icon"><FaBell /></div>
                <div className="timeline-content">
                    <strong>Notification of Acceptance</strong>
                    <p>June 10, 2025</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-icon"><FaCamera /></div>
                <div className="timeline-content">
                    <strong>Camera-Ready Submission</strong>
                    <p>July 18, 2025</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-icon"><FaCalendarMinus /></div>
                <div className="timeline-content">
                    <strong>Conference Date</strong>
                    <p>July 18, 2025</p>
                </div>
            </div>
        </div>
    </div>

</div>  )
}
export default Sidebar