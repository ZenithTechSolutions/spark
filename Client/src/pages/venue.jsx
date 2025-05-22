import '../styles/venue.css';
import venue1 from '../assets/venue1.jpg'
import venue2 from '../assets/venue2.jpg'
import venue3 from '../assets/venue3.jpg'
import venue4 from '../assets/venue4.jpg'
import venue5 from '../assets/venue5.jpg'
function Venue(){
    return(
        <div className="total">
        <div className="text-head">
            <h1>Conference Venue</h1>
            <p><span>Spark 2025</span> will take place at the <span>KPR Institute of Engineering and Technology (KPRIET)</span>.</p>
            <p>The SPARK Conference 2025 will take place at KPR Institute of Engineering and Technology, hosted across state-of-the-art halls, including Ragam Hall, Dhanam Hall, Pallavi Hall, Veena Hall, and Geetham Hall. Each venue is equipped with modern facilities to ensure a seamless and engaging conference experience.</p>
        </div>
        <div className="grid-container">
            <div className="image">
                <div className="img1">
                    <img src={venue1} alt="Image 1"/>
                </div>
                <div className="img2">
                    <img src={venue2} alt="Image 2"/>
                </div>
                <div className="img3">
                    <img src={venue3} alt="Image 3"/>
                </div>
                <div className="img4">
                    <img src={venue4} alt="Image 4"/>
                </div>
                <div className="img5">
                    <img src={venue5} alt="Image 5"/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Venue
