import '../styles/explore.css';
import ooty from '../assets/ooty.png';
import vaalparai from '../assets/vaalparai.png';
import snehadhreeram from '../assets/snehadheeram.png';
import kodaikanal from '../assets/kodaikanal.png';
import mysore from '../assets/mysore.png';
import kanyakumari from '../assets/kanyakumari.jpg';
import madurai from '../assets/madurai.jpg';
import chennai from '../assets/chennai.png';
import munnar from '../assets/munnar.png';
import isha from '../assets/isha.png';

function Explore() {
    return (
        <div className="tourist-container">
            <div className="tourist-content">
                <div className="tourist-header">
                    <h1>Famous Tourist Places in South India</h1>
                    <p>Discover the breathtaking beauty and rich culture of South India</p>
                </div>
                <div className="tourist-places">
                    <div className="place-card">
                        <div className="place-image">
                            <img src={ooty} alt="Ooty" />
                        </div>
                        <div className="place-details">
                            <h2>Ooty - The Queen of Hill Stations</h2>
                            <p>Ooty, also known as Udhagamandalam, is a picturesque hill station with lush green tea plantations, misty mountains, and serene lakes.</p>
                            <ul>
                                <li><strong>&bull;</strong> Botanical Garden - A well-maintained garden with diverse flora.</li>
                                <li><strong>&bull;</strong> Ooty Lake - A scenic spot for boating and relaxation.</li>
                                <li><strong>&bull;</strong> Doddabetta Peak - The highest peak in the Nilgiris with breathtaking views.</li>
                                <li><strong>&bull;</strong> Tea Estates - Walk through vast tea plantations and enjoy fresh tea.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image">
                            <img src={vaalparai} alt="Valparai" />
                        </div>
                        <div className="place-details">
                            <h2>Valparai - The 7th Heaven</h2>
                            <p>A tranquil hill station in the Western Ghats, Valparai is a paradise for nature lovers.</p>
                            <ul>
                                <li><strong>&bull;</strong> Aliyar Dam - A beautiful reservoir with a park and boating options.</li>
                                <li><strong>&bull;</strong> Monkey Falls - A natural waterfall surrounded by lush greenery.</li>
                                <li><strong>&bull;</strong> Sholayar Dam - One of the largest dams in South India.</li>
                                <li><strong>&bull;</strong> Tea Estates - Vast stretches of tea plantations offering mesmerizing views.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image">
                            <img src={kodaikanal} alt="Kodaikanal" />
                        </div>
                        <div className="place-details">
                            <h2>Kodaikanal - The Princess of Hill Stations</h2>
                            <p>Kodaikanal is a charming hill station with a cool climate and stunning natural beauty.</p>
                            <ul>
                                <li><strong>&bull;</strong> Kodaikanal Lake - Enjoy boating on this beautiful star-shaped lake.</li>
                                <li><strong>&bull;</strong> Pillar Rocks - Massive rock formations with a great view.</li>
                                <li><strong>&bull;</strong> Silver Cascade Falls - A stunning waterfall on the way to Kodaikanal.</li>
                                <li><strong>&bull;</strong> Coaker's Walk - A scenic walking path with panoramic views.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image">
                            <img src={mysore} alt="Mysore" />
                        </div>
                        <div className="place-details">
                            <h2>Mysore - The Royal Heritage City</h2>
                            <p>Known for its royal heritage, palaces, and cultural vibrance.</p>
                            <ul>
                                <li><strong>&bull;</strong> Mysore Palace - A grand palace showcasing Indo-Saracenic architecture.</li>
                                <li><strong>&bull;</strong> Brindavan Gardens - Beautiful gardens with musical fountains.</li>
                                <li><strong>&bull;</strong> Chamundi Hill - A sacred site with a temple and panoramic views.</li>
                                <li><strong>&bull;</strong> St. Philomena's Church - A stunning Gothic-style church.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image">
                            <img src={snehadhreeram} alt="Snehadhreeram Beach" />
                        </div>
                        <div className="place-details">
                            <h2>Snehadhreeram Beach - A Hidden Gem</h2>
                            <p>A serene and lesser-known beach perfect for relaxation and unwinding.</p>
                            <ul>
                                <li><strong>&bull;</strong> Peaceful Ambiance - Away from the usual tourist crowds.</li>
                                <li><strong>&bull;</strong> Golden Sand - Soft sands ideal for a peaceful stroll.</li>
                                <li><strong>&bull;</strong> Sunset Views - Breathtaking sunset panoramas over the ocean.</li>
                                <li><strong>&bull;</strong> Local Fishing Villages - Experience the lifestyle of local fishermen.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image">
                            <img src={kanyakumari} alt="Kanyakumari" />
                        </div>
                        <div className="place-details">
                            <h2>Kanyakumari - Land of Three Seas</h2>
                            <p>Famous for its beautiful beaches, Vivekananda Rock Memorial, and stunning sunrise and sunset views.</p>
                            <ul>
                                <li><strong>&bull;</strong> Thiruvalluvar Statue - A 133-foot-tall statue of the Tamil poet and philosopher.</li>
                                <li><strong>&bull;</strong> Vivekananda Rock Memorial - A spiritual landmark in the sea.</li>
                                <li><strong>&bull;</strong> Sunrise & Sunset Views - Stunning panoramic coastal views.</li>
                                <li><strong>&bull;</strong> Kanyakumari Temple - A sacred site dedicated to Goddess Kanya Kumari.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image">
                            <img src={madurai} alt="Madurai" />
                        </div>
                        <div className="place-details">
                            <h2>Madurai - The Temple City</h2>
                            <p>One of the oldest cities in India, famous for its historical and cultural significance.</p>
                            <ul>
                                <li><strong>&bull;</strong> Meenakshi Temple - A stunning architectural marvel and spiritual hub.</li>
                                <li><strong>&bull;</strong> Thirumalai Nayakkar Mahal - A majestic palace with Indo-Saracenic architecture.</li>
                                <li><strong>&bull;</strong> Gandhi Memorial Museum - Showcases artifacts from Gandhi’s life.</li>
                                <li><strong>&bull;</strong> Azhagar Kovil - A sacred temple with beautiful surroundings.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image">
                            <img src={chennai} alt="Chennai" />
                        </div>
                        <div className="place-details">
                            <h2>Chennai - The Gateway to South India</h2>
                            <p>A vibrant metropolis known for its beaches, temples, and cultural heritage.</p>
                            <ul>
                                <li><strong>&bull;</strong> Marina Beach - One of the longest urban beaches in the world.</li>
                                <li><strong>&bull;</strong> Kapaleeshwarar Temple - A historic and architecturally stunning temple.</li>
                                <li><strong>&bull;</strong> Santhome Basilica - A beautiful church built over the tomb of St. Thomas.</li>
                                <li><strong>&bull;</strong> Fort St. George - A historic fort from the colonial era.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image">
                            <img src={munnar} alt="Munnar" />
                        </div>
                        <div className="place-details">
                            <h2>Munnar - The Kashmir of South India</h2>
                            <p>A breathtaking hill station known for its tea plantations and scenic beauty.</p>
                            <ul>
                                <li><strong>&bull;</strong> Echo Point - A scenic spot where sound reverberates naturally.</li>
                                <li><strong>&bull;</strong> Tea Gardens - Endless stretches of tea plantations.</li>
                                <li><strong>&bull;</strong> Eravikulam National Park - Home to the endangered Nilgiri Tahr.</li>
                                <li><strong>&bull;</strong> Mattupetty Dam - A picturesque reservoir surrounded by hills.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image">
                            <img src={isha} alt="Isha Coimbatore" />
                        </div>
                        <div className="place-details">
                            <h2>Isha Yoga Center - Spiritual Retreat in Coimbatore</h2>
                            <p>A renowned spiritual destination at the foothills of the Velliangiri Mountains.</p>
                            <ul>
                                <li><strong>&bull;</strong> Adiyogi Statue - A 112-foot-tall Shiva statue.</li>
                                <li><strong>&bull;</strong> Dhyanalinga - A powerful meditative space.</li>
                                <li><strong>&bull;</strong> Linga Bhairavi - A divine feminine energy space.</li>
                                <li><strong>&bull;</strong> Surrounding Nature - Serene landscapes and greenery.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
