import '../styles/committees.css';
import KPRamasamy from '../assets/KPRamasamy.jpg';
import AMNatarajan from '../assets/AMNatarajan.jpg';
import DSaravanan from '../assets/DSaravanan.jpg';
import ABalamurugan from '../assets/ABalamurugan.jpg';
import PNarayanasamy from '../assets/PNarayanasamy.jpg';
import MAManikandan from '../assets/MAManikandan.jpg';
import BThamaraikannan from '../assets/BThamaraikannan.jpg';
import KirubaShankar from '../assets/KirubaShankar.jpg';

function Committees() {
  return (
    <div class="committee-container">
      <div class="committee-header">
        <h1>Committees</h1>
      </div>
      <div class="Mteam">
        <h3>KPRIET</h3>
        <h2>Management Team</h2>
        <div class="Mteam-row">
          <div class="teams-box">
            <img src={KPRamasamy} alt="K P Ramasamy" />
            <div class="teams-text">
              <h4>Dr.K.P.Ramasamy</h4>
              <h5>Chairman</h5>
            </div>
          </div>
          <div class="teams-box">
            <img src={AMNatarajan} alt="A M Natarajan" />
            <div class="teams-text">
              <h4>Dr.A.M.Natarajan</h4>
              <h5>Cheif Executive</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="Cteam">
        <h3>KPRIET</h3>
        <h2>Core Team</h2>
        <div class="Cteam-row1">
          <div class="teams-box">
            <img src={DSaravanan} alt="D Saravanan" />
            <div class="teams-text">
              <h4>Dr.D.Saravanan</h4>
              <h5>Principal</h5>
            </div>
          </div>
          <div class="teams-box">
            <img src={ABalamurugan} alt="A Balamurugan" />
            <div class="teams-text">
              <h4>Dr.A.Balamurugan</h4>
              <h5>Registrar and Head - CFAC</h5>
            </div>
          </div>
          <div class="teams-box">
            <img src={PNarayanasamy} alt="P Narayanasamy" />
            <div class="teams-text">
              <h4>Dr.P.Narayanasamy</h4>
              <h5>Controller of Examinations (CoE) and Chair - ITSIM</h5>
            </div>
          </div>
        </div>
        <div class="Cteam-row2">
          <div class="teams-box">
            <img src={MAManikandan} alt="M A Manikandan" />
            <div class="teams-text">
              <h4>Dr.M.A.Manikandan</h4>
              <h5>Director - KIC and KPR Global EduTech Consulting Services</h5>
            </div>
          </div>
          <div class="teams-box">
            <img src={BThamaraikannan} alt="B Thamaraikannan" />
            <div class="teams-text">
              <h4>Dr.B.Thamaraikannan</h4>
              <h5>Director - Admin and CDC</h5>
            </div>
          </div>
          <div class="teams-box">
            <img src={KirubaShankar} alt="Kiruba Shankar" />
            <div class="teams-text">
              <h4>Dr.Kiruba Shankar</h4>
              <h5>Director - Industry Institute Partnership</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Committees;