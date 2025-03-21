import '../styles/committees.css';
import KPRamasamy from '../assets/KPRamasamy.jpg';
import AMNatarajan from '../assets/AMNatarajan.jpg';
import gayathri from '../assets/gayathri.png';

/* ===========================
        TEAM DATA
   =========================== */

// Management Team
const managementTeam = [
  { img: KPRamasamy, name: "Dr. K.P. Ramasamy", role: "Chairman" },
  { img: AMNatarajan, name: "Dr. A.M. Natarajan", role: "Chief Executive" },
  { img: gayathri, name: "Ms. M. Gayathri", role: "Secretary" }
];

// Conference Chairs
const conferenceChairs = [
  { name: "Dr. M. Kathirvelu", role: "Professor & Head, ECE, KPRIET" },
  { name: "Dr. K. Mohana Sundaram", role: "Professor & Head, EE, KPRIET" }
];

// Conference Coordinators
const conferenceCoordinators = [
  { name: "Dr. S. Finney Daniel Shadrach", role: "KPRIET, Coimbatore, India" },
  { name: "Dr. G. Saravanan", role: "KPRIET, Coimbatore, India" }
];

// Technical Program Committee
const technicalCommittee = [
  "Dr. Indra J", "Dr. Kalamani M", "Dr. Venugopal D", "Dr. Ramesh S M",
  "Dr. Seethalakshmi V", "Dr. Kalirajan K", "Dr. Maheswar R",
  "Dr. Jai Shankar B", "Dr. V. S. Chandrika"
];

// Publication Committee
const publicationCommittee = [
  "Dr. Gurumoorthy K B", "Dr. Murugan K", "Dr. Jagadesh T",
  "Dr. P. Pandiyan", "Dr. A. Mohamed Ibrahim"
];

// Finance Committee
const financeCommittee = [
  "Dr. I. Baranilingesan", "Dr. Prasad J", "Mr. Balamurali S", "Mr. Shanmugaraja T"
];

// Organizing Committee
const organizingCommittee = [
  "Dr. Muralidharan J", "Dr. Jaikumar R", "Dr. Arijit De",
  "Mr. Jakir Hussain G K", "Dr. Prasad J", "Dr. Vigneswaran D",
  "Dr. James Deva Koresh H", "Dr. Nithya S", "Dr. Venkatesh T",
  "Dr. Sathishkumar N", "Ms. Archita Hore", "Mr. Pradeep Kumar G",
  "Dr. Singaram M", "Mr. Satheesh Kumar S", "Ms. Priyadharsini S"
];

// Advisory Committee
const advisoryCommittee = [
  "Dr. Sanjeevikumar Padmanaban", "Dr. Ramesh Bansal", "Dr. Ravi Samikannu",
  "Dr. G. Saravana Illago", "Dr. P. Parthiban", "Dr. L. Ashok Kumar",
  "Dr. Manee Sangaran Diagarajan", "Prof. Mariya Ouaissa", "Prof. Hee Yong Youn",
  "Dr. Chee Yong Lau", "Dr. Malayappan Shridhar", "Prof. Po-Ming Lee"
];

function Committees() {
  return (
    <div className="committee-container">
      <div className="committee-header">
        <h1>Committees</h1>
      </div>

      {/* Management Team */}
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

      {/* Conference Chair */}
      <CommitteeSection title="Conference Chair" members={conferenceChairs} />

      {/* Conference Coordinator */}
      <CommitteeSection title="Conference Coordinator" members={conferenceCoordinators} />

      {/* Technical Program Committee */}
      <CommitteeList title="Technical Program Committee" members={technicalCommittee} />

      {/* Publication Committee */}
      <CommitteeList title="Publication Committee" members={publicationCommittee} />

      {/* Finance Committee */}
      <CommitteeList title="Finance Committee" members={financeCommittee} />

      {/* Organizing Committee */}
      <CommitteeList title="Organizing Committee" members={organizingCommittee} />

      {/* Advisory Committee */}
      <CommitteeList title="Advisory Committee" members={advisoryCommittee} />
    </div>
  );
}

const CommitteeSection = ({ title, members }) => (
  <div className="team-section">
    <h2>{title}</h2>
    <ul className="committee-list">
      {members.map((member, index) => (
        <li key={index}><strong>{member.name}</strong> - {member.role}</li>
      ))}
    </ul>
  </div>
);

// Displays Only Names (for Large Committees)
const CommitteeList = ({ title, members }) => (
  <div className="team-section">
    <h2>{title}</h2>
    <ul className="committee-list">
      {members.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  </div>
);

export default Committees;
