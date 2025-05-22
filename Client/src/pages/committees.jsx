import React from 'react';
import '../styles/committees.css';
import KPRamasamy from '../assets/KPRamasamy.jpg';
import AMNatarajan from '../assets/AMNatarajan.jpg';
import DSaravanan from '../assets/DSaravanan.jpg';
import gayathri from '../assets/gayathri.jpg';
import eeehod from '../assets/eeehod.jpeg';
import ecehod from '../assets/ecehod.jpeg';

const committee = [
  {
    id: "Management Team", members: [
      { img: KPRamasamy, name: "Dr. K.P. Ramasamy", role: "Chairman" },
      { img: gayathri, name: "Ms. M. Gayathri", role: "Secretary" },
      { img: AMNatarajan, name: "Dr. A.M. Natarajan", role: "Chief Executive" },
      { img: DSaravanan, name: "Dr. D.Saravanan", role: "Principal" }
    ]
  },
  {
    id: " Conference Chairs", members: [
      { img: ecehod, name: "Dr. M. Kathirvelu", role: "Professor & Head, ECE, KPRIET" },
      { img: eeehod, name: "K. Mohana Sundaram", role: "Professor & Head, EE, KPRIET" }
    ]
  }, {
    id: " Conference Coordinators", members: [
      { name: "Dr. S. Finney Daniel Shadrach", role: "KPRIET, Coimbatore, India" },
      { name: "Dr. G. Saravanan", role: "KPRIET, Coimbatore, India" }
    ]
  }, {
    id: "Technical Committee", members: [
      { name: "Dr. Indra J", role: "Professor, KPRIET" },
      { name: "Dr. Kalamani M", role: "Professor, KPRIET" },
      { name: "Dr. Venugopal D", role: "Professor, KPRIET" },
      { name: "Dr. Ramesh S M", role: "Professor, KPRIET" },
      { name: "Dr. Seethalakshmi V", role: "Professor, KPRIET" },
      { name: "Dr. Kalirajan K", role: "Professor, KPRIET" },
      { name: "Dr. Maheswar R", role: "Professor, KPRIET" },
      { name: "Dr. Jai Shankar B", role: "Professor, KPRIET" },
      { name: "Dr. V. S. Chandrika", role: "Professor, KPRIET" }
    ]
  }, {
    id: "Publication Committee", members: [
      { name: "Dr. Gurumoorthy K B", role: "Associate Professor, KPRIET" },
      { name: "Dr. Murugan K", role: "Associate Professor, KPRIET" },
      { name: "Dr. Jagadesh T", role: "Assistant Professor, KPRIET" },
      { name: "Dr. P. Pandiyan", role: "Associate Professor, KPRIET" },
      { name: "Dr. A. Mohamed Ibrahim", role: "Assistant Professor, KPRIET" },
      { name: "Dr. Arijit De", role: "Associate Professor, KPRIET" },
      { name: "Mrs. Rima Deka", role: "Assistant Professor, KPRIET" },
      { name: "Dr. Debashish Pal", role: "Assistant Professor, KPRIET" },
      { name: "Mr. Ashish Ranjan Shadangi", role: "Assistant Professor, KPRIET" },
      { name: "Mr. Himangshu Deka", role: "Assistant Professor, KPRIET" }

    ]
  }, {

    id: " Finance Committee", members: [
      { name: "Dr. I. Baranilingesan", role: "Assistant Professor, KPRIET" },
      { name: "Dr. Prasad J", role: "Assistant Professor, KPRIET" },
      { name: "Mr. Balamurali S", role: "Assistant Professor, KPRIET" },
      { name: "Mr. Shanmugaraja T", role: "Assistant Professor, KPRIET" }
    ]
  }, {
    id: " Organizing Committee", members: [
      { name: "Dr. Muralidharan J", role: "Associate Professor, KPRIET" },
      { name: "Dr. Jaikumar R", role: "Associate Professor, KPRIET" },
      { name: "Mr. Jakir Hussain G K", role: "Assistant Professor, KPRIET" },
      { name: "Dr. Prasad J", role: "Assistant Professor, KPRIET" },
      { name: "Dr. Vigneswaran D", role: "Assistant Professor, KPRIET" },
      { name: "Dr. James Deva Koresh H", role: "Assistant Professor, KPRIET" },
      { name: "Dr. Nithya S", role: "Assistant Professor, KPRIET" },
      { name: "Dr. Venkatesh T", role: "Assistant Professor, KPRIET" },
      { name: "Dr. Sathishkumar N", role: "Assistant Professor, KPRIET" },
      { name: "Ms. Archita Hore", role: "Assistant Professor, KPRIET" },
      { name: "Mr. Pradeep Kumar G", role: "Assistant Professor, KPRIET" },
      { name: "Dr. Singaram M", role: "Assistant Professor, KPRIET" },
      { name: "Mr. Satheesh Kumar S", role: "Assistant Professor, KPRIET" },
      { name: "Ms. Priyadharsini S", role: "Assistant Professor, KPRIET" },
      { name: "Mr. Ram Nivas D", role: "Assistant Professor, KPRIET" },
      { name: "Ms. Gunanandhini S", role: "Assistant Professor, KPRIET" },
      { name: "Ms. Suganyadevi S", role: "Assistant Professor, KPRIET" },
      { name: "Ms. Saranya M D", role: "Assistant Professor, KPRIET" },
      { name: "Ms. Supriya M", role: "Assistant Professor, KPRIET" },
      { name: "Dr. C. Pazhanimuthu", role: "Assistant Professor, KPRIET" },
      { name: "Dr. V. Parimala", role: "Assistant Professor, KPRIET" },
      { name: "Dr. S. Ravindran", role: "Assistant Professor, KPRIET" },
      { name: "Ms. B. Lalitha", role: "Assistant Professor, KPRIET" },
      { name: "Mr. V. Kamalkumar", role: "Assistant Professor, KPRIET" },
      { name: "Mr. C. J. Vignesh", role: "Assistant Professor, KPRIET" },
      { name: "Dr. C. Dinesh", role: "Assistant Professor, KPRIET" },
      { name: "Mr. K. Balamurugan", role: "Assistant Professor, KPRIET" },
      { name: "Mr. M. Mohanasundaram", role: "Assistant Professor, KPRIET" }
    ]
  }, {
    id: " Advisory Committee", members: [
      { name: "Dr. Sanjeevikumar Padmanaban", role: "Professor, Department of Electrical Engineering, IT and Cybernetics, University of South-Eastern Norway, Porsgrunn, Norway" },
      { name: "Dr. Ramesh Bansal", role: "Professor, University of Sharjah, UAE" },
      { name: "Dr. Ravi Samikannu", role: "Associate Professor, Electrical Engineering, Botswana International University of Science" },
      { name: "Dr. G. Saravana Illago", role: "Professor, Electrical and Electronics Engineering, NIT Trichy, India" },
      { name: "Dr. P. Parthiban", role: "Associate Professor, Electrical and Electronics Engineering, NIT Surathkal" },
      { name: "Dr. L. Ashok Kumar", role: "Principal, Thiagarajar College of Engineering, Madurai, India" },
      { name: "Dr. Manee Sangaran Diagarajan", role: "School of Engineering, Taylor's University, Malaysia" },
      { name: "Prof. Mariya Ouaissa", role: "Cadi Ayyad University, Marrakech, Morocco" },
      { name: "Prof. Hee Yong Youn", role: "SungKyunKwan University School of Software, South Korea Seoul" },
      { name: "Dr. Chee Yong Lau", role: "Asia Pacific University of Technology and Innovation, Malaysia" },
      { name: "Dr. Malayappan Shridhar", role: "University of Michigan, Dearborn (Electrical and Computer Engineering), USA" },
      { name: "Prof. Po-Ming Lee", role: "Southern Taiwan University of Science and Technology, Taiwan" },
      { name: "Prof. Kyung-tae Kim", role: "Hannam University South Korea Engineering, South Korea" },
      { name: "Prof. Saravanan Muthaiyah", role: "IMU University, Malaysia" },
      { name: "Prof. Su-Ling Fan", role: "Tamkang University, Taiwan" },
      { name: "Prof. Abid Yahya", role: "Botswana International University of Science & Technology, Botswana" },
      { name: "Prashant Kumar S Chinamalli", role: "Sharnbasva University, India" },
      { name: "Rangu Seshukumar", role: "Vignan's Foundation for Science Technology and Research (Deemed to be university), India" },
      { name: "Palanichamy Naveen", role: "Dr. N.G.P. Institute of Technology, India" },
      { name: "Ganesh C", role: "Rajalakshmi Institute of Technology, India" },
      { name: "Dr. DeepakShahakar", role: "P. R. Pote (Patil) College of Engineering and Management, India" },
      { name: "Dr. Sivaraju S S", role: "RVS College of Engineering and Technology, India" },
      { name: "Sushovan Roy", role: "Dream Institute of Technology, India" },
      { name: "Ramya C", role: "SNS College of Technology, India" },
      { name: "Subramaniyan V", role: "Velammal Institute of Technology, India" },
      { name: "Ashok Kumar R", role: "Grt Institute Of Engineering And Technology, India" },
      { name: "Kowsalya M", role: "Sri Ramakrishna Engineering College, India" },
      { name: "Sureshk P", role: "Sri Krishna College of Technology, India" },
      { name: "Gunasekaran R", role: "Excel Engineering College, India" },
      { name: "Uthirasamy Ramasamy", role: "Mahendra Engineering College, India" },
      { name: "Sathyamoorthi S", role: "NPR College of Engineering and Technology, India" },
      { name: "Jaya Kumar Tatipathi", role: "KwantumG Research Labs, India" },
      { name: "Sampath A", role: "Kongunadu College of Engineering and Technology, India" },
      { name: "Arivoli Sundaramurthy", role: "KSR Institute for Engineering and Technology, India" },
      { name: "Kalaiarasi Ganesan", role: "Vignans Foundation for Science, Technology and Research (Deemed to be University), India" },
      { name: "Rakesh Kumar", role: "EETips Content Marketing Pvt Ltd, India" },
      { name: "Mandar Dixit", role: "Vishwaniketan's i-MEET, India" },
      { name: "Dr. R. Manjula Devi", role: "KPR Institute of Engineering and Technology, India" },
      { name: "Naveena Bhargavi Repalle", role: "CVR College of Engineering, India" },
      { name: "Venkatesh R J", role: "SRM Madurai College for Engineering and Technology, India" },
      { name: "Reshna S", role: "TKM College of Engineering, India" },
      { name: "Yamunarani T", role: "KSR Institute for Engineering and Technology, India" },
      { name: "Premalatha K", role: "Kumaraguru College of Technology, India" },
      { name: "Gayathri P", role: "Grace College of Engineering, Tuticorin, India" },
      { name: "Dinesh Chellappan", role: "KPR Institute of Engineering and Technology, India" },
      { name: "Muppudathi SuthaS", role: "Sardar Raja College of Engineering, India" },
      { name: "Sathish Kumar Dhamodharan", role: "Karpagam Academy of Higher Education, India" },
      { name: "S K Parveen", role: "Brilliant Institute of Engineering and Technology, India" },
      { name: "Sacithraa R", role: "K.S.R College of Engineering, India" },
      { name: "Senthil Kumar Balakrishnan", role: "St.Josephs College of Engineering, India" },
      { name: "Thirupura Sundari K", role: "Sri SaiRam Engineering College, India" },
      { name: "Vijayakumar M", role: "K. S. R. College of Engineering, India" },
      { name: "Madhav Sharma", role: "Poornima Institute of Engineering and Technology, India" },
      { name: "Sivapragash Chidambaram", role: "Swarnandhra College of Engineering and Technology, India" },
      { name: "Perumallapalli Krishna", role: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid, India" }
    ]
  }
]

const Committee = () => {
  return (
    <div className="committee-container">
      {committee.map((team, i) => (
        <div key={i} className='committee-header'>
          <h1>{team.id}</h1>
          <div className="committee-list">
            {team.members.map((member, j) => (
              <div key={j} className={`${member.img ? 'team-box' : "team-box-null"}`}>
                {member.img && (
                  <img src={member.img} alt={member.name} />
                )}
                {member.img ? (
                  <div className='team-text-col'>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                ) : (
                  <div className='team-text-row'>
                  <h3>{member.name}</h3>
                  <p>- &nbsp;&nbsp;{member.role}</p>
                </div>
                )}

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Committee