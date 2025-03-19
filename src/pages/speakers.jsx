import '../styles/speakers.css';
import vishal from '../assets/vishal.png';
import vignesh from '../assets/vignesh.png';
import sadhur from '../assets/sadhur.png';
import pradeep from '../assets/pradeep.png';
import giri from '../assets/giri.jpg';

const speakersData = [
    { img: vishal, name: "Dr. Vishal Kannan S.I", position: "ASP/ECE", department: "Department of Biomedical Science, Sana'a University, Yemen" },
    { img: pradeep, name: "Dr. Pradeep T.M", position: "ASP/EEE", department: "Department of Biomedical Science, Sana'a University, Yemen" },
    { img: vignesh, name: "Dr. Vignesh M", position: "ASP/ECE", department: "Department of Biomedical Science, Sana'a University, Yemen" },
    { img: giri, name: "Dr. Giri Prasath B.P", position: "ASP/ECE", department: "Department of Biomedical Science, Sana'a University, Yemen" },
    { img: sadhur, name: "Dr. Sathurnithy S", position: "ASP/EEE", department: "Department of Biomedical Science, Sana'a University, Yemen" }
];

function Speakers() {
    return (
        <div className="speakers">
            <h1>Speakers for SPARK'25</h1>
            <div className="boxes">
                {speakersData.map((speaker, index) => (
                    <div key={index} className="box">
                        <img src={speaker.img} alt={speaker.name} />
                        <div className="box_content">
                            <h2>{speaker.name}</h2>
                            <h3>{speaker.position}</h3>
                            <p>{speaker.department}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Speakers;
