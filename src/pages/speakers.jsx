import '../styles/speakers.css'
import vishal from '../assets/vishal.png'
import vignesh from '../assets/vignesh.png'
import sadhur from '../assets/sadhur.png'
import pradeep from '../assets/pradeep.png'
import giri from '../assets/giri.jpg'

function Speakers() {
    return (
        <div className="speakers">
            <h1>Speakers for SPARK'25</h1>
            <div className="boxes">
                <div className="box">
                    <img src={vishal} alt="vishal" />
                    <div className="box_content">
                        <h1>Dr.Vishal Kannan.S.I</h1>
                        <h2>ASP/ECE</h2>
                        <p>Department of Biomedical Science, Sana'a University, Yemen</p>
                    </div>
                </div>
                <div className="box">
                    <img src={pradeep} alt="" />
                    <div className="box_content">
                        <h1>Dr.Pradeep.T M</h1>
                        <h2>ASP/EEE</h2>
                        <p>Department of Biomedical Science, Sana'a University, Yemen</p>
                    </div>
                </div>
                <div className="box">
                    <img src={vignesh} alt="" />
                    <div className="box_content">
                        <h1>Dr.Vignesh.M</h1>
                        <h2>ASP/ECE</h2>
                        <p>Department of Biomedical Science, Sana'a University, Yemen</p>
                    </div>
                </div>
                <div className="box">
                    <img src={giri} alt="" />
                    <div className="box_content">
                        <h1>Dr.Giri Prasath.B.P</h1>
                        <h2>ASP/ECE</h2>
                        <p>Department of Biomedical Science, Sana'a University, Yemen</p>
                    </div>
                </div>
                <div className="box">
                    <img src={sadhur} alt="" />
                    <div className="box_content">
                        <h1>Dr.Sathurnithy.S</h1>
                        <h2>ASP/EEE</h2>
                        <p>Department of Biomedical Science, Sana'a University, Yemen</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers;