import "../styles/accommodation.css";
import hostelImg from "../assets/hostel-bg.png";
import leMeridienImg from "../assets/079319c7_z.webp";
import fairfieldImg from "../assets/fairfield mariot.png";
import radissonImg from "../assets/Raddisson blu.avif";
import residencyImg from "../assets/residency towers.webp";
import vivantaImg from "../assets/vivanta.jpg";
import welcomeHotelImg from "../assets/welcome hotel.jpg";

function Accommodation() {
    return (
        <>
            <div className="accommodation-main">
                <div className="accommodation-hostel">
                    <div className="hostel-availability">
                        <h1>Hostels are available!</h1>
                    </div>
                    <div className="acc-hostel-image">
                        <img src={hostelImg} alt="Hostel accommodation available at KPRIET" />
                    </div>
                    <p>
                        Participants can stay in well-maintained hostel accommodations within the campus at a nominal cost.
                        The hostels provide a safe, clean, and convenient stay with essential facilities, ensuring easy access
                        to the conference venue and other campus amenities. Staying on campus allows attendees to immerse themselves
                        in the conference experience while enjoying a vibrant academic environment.
                    </p>
                    <p>For hostel stay details, Contact +91 94438 39525 / +91 96554 45823 or Email spark2025@kpriet.ac.in</p>
                </div>
                <hr />
                <div className="accommodation-hotel">
                    <div className="acc-hotel-content">
                        <h1>Nearby Hotels</h1>
                        <p id="acc-p">
                            For those who prefer off-campus accommodation, several premium 5-star hotels are located near the campus.
                            These hotels offer spacious rooms, fine dining, wellness centers, and business facilities, providing a luxurious
                            and comfortable stay. Many of these hotels are just a short distance away, ensuring easy connectivity to the conference venue.
                            Participants can choose the accommodation that best suits their preferences and convenience.
                        </p>
                    </div>
                    <div className="accommodation-hotel1">
                        <img src={leMeridienImg} alt="Le Meridien, Coimbatore" />
                        <div className="accommodation-hotel-content">
                            <h3>Le Meridien, Coimbatore</h3>
                            <p>⭐⭐⭐⭐⭐ </p>

                            <p>9 km from KPRIET</p>
                        </div>
                    </div>

                    <div className="accommodation-hotel1">
                        <img src={fairfieldImg} alt="Fairfield by Marriott, Coimbatore" />
                        <div className="accommodation-hotel-content">
                            <h3>Fairfield by Marriott, Coimbatore</h3>
                            <p>⭐⭐⭐⭐</p>
                            <p>14 km from KPRIET</p>
                        </div>
                    </div>

                    <div className="accommodation-hotel1">
                        <img src={radissonImg} alt="Radisson Blu Hotel, Coimbatore" />
                        <div className="accommodation-hotel-content">
                            <h3>Radisson Blu Hotel, Coimbatore</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>19 km from KPRIET</p>
                        </div>
                    </div>

                    <div className="accommodation-hotel1">
                        <img src={residencyImg} alt="The Residency Towers, Coimbatore" />
                        <div className="accommodation-hotel-content">
                            <h3>Residency Towers, Coimbatore</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>20 km from KPRIET</p>
                        </div>
                    </div>

                    <div className="accommodation-hotel1">
                        <img src={vivantaImg} alt="Vivanta, Coimbatore" />
                        <div className="accommodation-hotel-content">
                            <h3>Vivanta, Coimbatore</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>20 km from KPRIET</p>
                        </div>
                    </div>

                    <div className="accommodation-hotel1">
                        <img src={welcomeHotelImg} alt="Welcome hotel By ITC Hotels, Coimbatore" />
                        <div className="accommodation-hotel-content">
                            <h3>Welcomhotel, Coimbatore</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>21 km from KPRIET</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Accommodation;