import '../styles/committees.css';
import KPRamasamy from '../assets/KPRamasamy.jpg';
import AMNatarajan from '../assets/AMNatarajan.jpg';
import gayathri from '../assets/gayathri.jpg';

const managementTeam = [
  { img: KPRamasamy, name: "Dr. K.P. Ramasamy", role: "Chairman" },
  { img: AMNatarajan, name: "Dr. A.M. Natarajan", role: "Chief Executive" },
  { img: gayathri, name: "Ms. M. Gayathri", role: "Secretary" }
];

const conferenceChairs = [
  { name: "Dr. M. Kathirvelu", role: "Professor & Head, ECE, KPRIET" },
  { name: "Dr. K. Mohana Sundaram", role: "Professor & Head, EE, KPRIET" }
];

const conferenceCoordinators = [
  { name: "Dr. S. Finney Daniel Shadrach", role: "KPRIET, Coimbatore, India" },
  { name: "Dr. G. Saravanan", role: "KPRIET, Coimbatore, India" }
];

const technicalCommittee = [
  { name: "Dr. Indra J" }, { name: "Dr. Kalamani M" }, { name: "Dr. Venugopal D" },
  { name: "Dr. Ramesh S M" }, { name: "Dr. Seethalakshmi V" }, { name: "Dr. Kalirajan K" },
  { name: "Dr. Maheswar R" }, { name: "Dr. Jai Shankar B" }, { name: "Dr. V. S. Chandrika" }
];

const publicationCommittee = [
  { name: "Dr. Gurumoorthy K B" }, { name: "Dr. Murugan K" }, { name: "Dr. Jagadesh T" },
  { name: "Dr. P. Pandiyan" }, { name: "Dr. A. Mohamed Ibrahim" }
];

const financeCommittee = [
  { name: "Dr. I. Baranilingesan" }, { name: "Dr. Prasad J" },
  { name: "Mr. Balamurali S" }, { name: "Mr. Shanmugaraja T" }
];

const organizingCommittee = [
  { name: "Dr. Muralidharan J" }, { name: "Dr. Jaikumar R" }, { name: "Dr. Arijit De" },
  { name: "Mr. Jakir Hussain G K" }, { name: "Dr. Prasad J" }, { name: "Dr. Vigneswaran D" },
  { name: "Dr. James Deva Koresh H" }, { name: "Dr. Nithya S" }, { name: "Dr. Venkatesh T" },
  { name: "Dr. Sathishkumar N" }, { name: "Ms. Archita Hore" }, { name: "Mr. Pradeep Kumar G" },
  { name: "Dr. Singaram M" }, { name: "Mr. Satheesh Kumar S" }, { name: "Ms. Priyadharsini S" }
];

const advisoryCommittee = [
  { name: "Dr. Sanjeevikumar Padmanaban" }, { name: "Dr. Ramesh Bansal" },
  { name: "Dr. Ravi Samikannu" }, { name: "Dr. G. Saravana Illago" },
  { name: "Dr. P. Parthiban" }, { name: "Dr. L. Ashok Kumar" },
  { name: "Dr. Manee Sangaran Diagarajan" }, { name: "Prof. Mariya Ouaissa" },
  { name: "Prof. Hee Yong Youn" }, { name: "Dr. Chee Yong Lau" },
  { name: "Dr. Malayappan Shridhar" }, { name: "Prof. Po-Ming Lee" }
];


function Committees() {

  const CommitteeSection = ({ title, members }) => (
    <div className="team-section">
      <h2>{title}</h2>
      <ul className="committee-list">
        {members.map((member, index) => (
          member.role ? (<li key={index}><strong>{member.name}</strong> - {member.role}</li>) :
            (<li key={index} style={{ listStyle: "disc" }}>{member.name}</li>)
        ))}
      </ul>
    </div>
  );
  return (
    <div className="committee-container">
      <div className="committee-header">
        <h1>Committees</h1>
      </div>
      <div className="team-section">
        <h3>KPRIET</h3>
        <h2>Management Team</h2>
        <div className="team-row">
          {managementTeam.map((member, index) => (
            <div key={index} className="team-box">
              <img src={member.img} alt={member.name} />
              <div className="team-text">
                <h4>{member.name}</h4>
                <h5>{member.role}</h5>
              </div>
            </div>
          ))}  
        </div>
      </div>
      <CommitteeSection title="Conference Chair" members={conferenceChairs} />
      <CommitteeSection title="Conference Coordinator" members={conferenceCoordinators} />
      <CommitteeSection title="Technical Program Committee" members={technicalCommittee} />
      <CommitteeSection title="Publication Committee" members={publicationCommittee} />
      <CommitteeSection title="Finance Committee" members={financeCommittee} />
      <CommitteeSection title="Organizing Committee" members={organizingCommittee} />
      <CommitteeSection title="Advisory Committee" members={advisoryCommittee} />
    </div>
  );
}




export default Committees;
