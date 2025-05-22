import React from 'react'
import '../styles/home-sidebar.css'
import { FaCalendarAlt, FaPaperPlane, FaBell, FaCamera, FaCalendarMinus } from 'react-icons/fa'
function HomeSidebar() {
    return (
        <div className="home-sidebar">
            <div className="home-sidebar-section">
                <h3><FaCalendarAlt />Important Dates</h3>
                <div className="home-timeline">
                    <div className="home-timeline-item">
                        <div className="home-timeline-icon"><FaPaperPlane /></div>
                        <div className="home-timeline-content">
                            <strong>Paper Submission Deadline</strong>
                            <p>May 31, 2025</p>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-icon"><FaBell /></div>
                        <div className="home-timeline-content">
                            <strong>Notification of Acceptance</strong>
                            <p>June 10, 2025</p>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-icon"><FaCamera /></div>
                        <div className="home-timeline-content">
                            <strong>Camera-Ready Submission</strong>
                            <p>June 18, 2025</p>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-icon"><FaCalendarMinus /></div>
                        <div className="home-timeline-content">
                            <strong>Conference Date</strong>
                            <p>July 18, 2025</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HomeSidebar