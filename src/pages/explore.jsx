import '../styles/explore.css';
import ooty from '../assets/ooty.png';
import vaalparai from '../assets/vaalparai.png';
import snehadhreeram from '../assets/snehadheeram.png';
import kodaikanal from '../assets/kodaikanal.png';
import mysore from '../assets/mysore.png';

function Explore() {
    return (
        <div className="tourist-container">
            <div className="tourist-content">
                <div className="tourist-header">
                    <h1>Famous Tourist Places in Tamil Nadu (West Region)</h1>
                    <p>Discover the breathtaking beauty and rich culture of Tamil Nadu's western region.</p>
                </div>
                <div className="tourist-places">
                    <div className="place-card">
                        <div className="place-image">
                            <img src={ooty} alt="Ooty" />
                        </div>
                        <div className="place-details">
                            <h2>Ooty - The Queen of Hill Stations</h2>
                            <p>Ooty, also known as Udhagamandalam, is a picturesque hill station surrounded by lush green tea plantations, misty mountains, and serene lakes. It offers a perfect escape from the bustling city life.</p>
                            <ul>
                                <li>Botanical Garden - A well-maintained garden with diverse flora.</li>
                                <li>Ooty Lake - A scenic spot for boating and relaxation.</li>
                                <li>Doddabetta Peak - The highest peak in the Nilgiris with a breathtaking view.</li>
                                <li>Tea Estates - Walk through vast tea plantations and enjoy fresh tea.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="place-card">
                        <div className="place-image">
                            <img src={vaalparai} alt="Vaalparai" />
                        </div>
                        <div className="place-details">
                            <h2>Vaalparai - Serene Tea Plantations</h2>
                            <p>A tranquil hill station in the Western Ghats, Vaalparai is a paradise for nature lovers. Surrounded by thick forests and tea gardens, it offers a peaceful retreat.</p>
                            <ul>
                                <li>Aliyar Dam - A beautiful reservoir with a park and boating options.</li>
                                <li>Monkey Falls - A natural waterfall surrounded by lush greenery.</li>
                                <li>Sholayar Dam - One of the largest dams in South India.</li>
                                <li>Tea Estates - Vast stretches of tea plantations offering mesmerizing views.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="place-card">
                        <div className="place-image">
                            <img src={snehadhreeram} alt="Snehadhreeram Beach" />
                        </div>
                        <div className="place-details">
                            <h2>Snehadhreeram Beach - A Hidden Gem</h2>
                            <p>Located away from the usual tourist rush, Snehadhreeram Beach is a pristine coastal paradise. The beach offers peaceful surroundings, making it ideal for relaxation.</p>
                            <ul>
                                <li>Serene Coastal Beauty - Perfect for evening strolls.</li>
                                <li>Sunset Views - Witness breathtaking sunset panoramas.</li>
                                <li>Fishing Villages - Experience the lifestyle of local fishermen.</li>
                                <li>Relaxing Atmosphere - A peaceful getaway from city life.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="place-card">
                        <div className="place-image">
                            <img src={kodaikanal} alt="Kodaikanal" />
                        </div>
                        <div className="place-details">
                            <h2>Kodaikanal - The Princess of Hill Stations</h2>
                            <p>Kodaikanal is a charming hill station with a cool climate and stunning natural beauty. It is famous for its lakes, waterfalls, and unique flora.</p>
                            <ul>
                                <li>Kodaikanal Lake - Enjoy boating on this beautiful star-shaped lake.</li>
                                <li>Pillar Rocks - Massive rock formations with a great view.</li>
                                <li>Silver Cascade Falls - A stunning waterfall on the way to Kodaikanal.</li>
                                <li>Coaker's Walk - A scenic walking path with panoramic views.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="place-card">
                        <div className="place-image">
                            <img src={mysore} alt="Mysore" />
                        </div>
                        <div className="place-details">
                            <h2>Mysore - The Royal Heritage City</h2>
                            <p>Though located in Karnataka, Mysore is a must-visit for travelers exploring western Tamil Nadu. It is known for its royal heritage, palaces, and cultural vibrance.</p>
                            <ul>
                                <li>Mysore Palace - A grand palace showcasing Indo-Saracenic architecture.</li>
                                <li>Brindavan Gardens - Beautiful gardens with musical fountains.</li>
                                <li>Chamundi Hill - A sacred site with a temple and panoramic views.</li>
                                <li>St. Philomena's Church - A stunning Gothic-style church.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tourist-cta">
                </div>
            </div>
        </div>
    );
}

export default Explore;
