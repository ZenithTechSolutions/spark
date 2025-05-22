import '../styles/speakers.css';
import speaker1 from '../assets/speaker-Shridhar.jpg';
import speaker2 from '../assets/speaker-Lau Chee Yong.jpg';
import speaker3 from '../assets/speaker-Prof.Dr. Po-Ming Lee.jpg';
import speaker4 from '../assets/speaker-Prof.Dr. Kyung Tae Kim.jpg';
import speaker5 from '../assets/speaker-Bernhard Glück.jpg';

const speakersData = [
    { img: speaker1, name: "Prof. Dr. M. Shridhar",clg :"University of Michigan-Dearborn" ,position :"Professor Emeritus" ,location:"USA" },
    { img: speaker2, name: "Ir. Eur. Ing. Ts. Dr. Lau Chee Yong",clg :"Asia Pacific University" , position: " Assistant Professor ",location:"Malaysia" },
    { img: speaker3, name: "Prof. Dr. Po-Ming Lee", clg :"Southern Taiwan University of Science and Technology" ,position: "Professor",location:"Taiwan" },
    { img: speaker4, name: "Prof. Dr. Kyung Tae Kim",clg :"Hannam University" , position: "Professor " ,location:"South Korea"},
    { img: speaker5, name: "Prof. Dr. -Ing. Bernhard Glück", clg :"Technical University of Bradenburg" ,position: "Professor",location:"Germany" }
];

function Speakers() {
    return (
        <div className="speakers">
            <h1>Keynote Speakers for SPARK'25</h1>
            <div className="boxes">
                {speakersData.map((speaker, index) => (
                    <div key={index} className="box">
                        <img src={speaker.img} alt={speaker.name} />
                        <div className="box_content">
                            <h2>{speaker.name}</h2>
                            <h3>{speaker.position}</h3>
                            <h3>{speaker.clg}</h3>
                            <p>{speaker.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Speakers;
