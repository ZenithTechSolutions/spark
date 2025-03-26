import '../styles/slider.css'
import { Link } from 'react-router-dom'
import s1 from '../assets/speaker-Shridhar.jpg';
import s2 from '../assets/speaker-Lau Chee Yong.jpg';
import s3 from '../assets/speaker-Prof.Dr. Po-Ming Lee.jpg';
import s4 from '../assets/speaker-Prof.Dr. Kyung Tae Kim.jpg';
import s5 from '../assets/speaker-Bernhard Glück.jpg';


function slider() {
    return (
        <>
                <div className="slider-header">
                    <h2>Keynote Speakers</h2> 
                </div>
            <div className="wrapper">
                <div className="item item1">
                    <img src={s1} />
                    <h3>Prof. Dr. M. Shridhar</h3>
                    <h4>Professor Emeritus</h4>
                    <p>USA</p>
                </div>
                <div className="item item2">
                    <img src={s2} />
                    <h3>Ir. Eur. Ing. Ts. Dr. Lau Chee Yong</h3>
                    <h4>Assistant Professor</h4>
                    <p>Malaysia</p>
                </div>
                <div className="item item3">
                    <img src={s3} />
                    <h3>Prof. Dr. Po-Ming Lee</h3>
                    <h4>Professor</h4>
                    <p>Taiwan</p>
                </div>
                <div className="item item4">
                    <img src={s4} />
                    <h3>Prof. Dr. Kyung Tae Kim</h3>
                    <h4>Professor</h4>
                    <p>South Korea</p>
                </div>
                <div className="item item5">
                    <img src={s5} />
                    <h3>Prof. Dr. -Ing. Bernhard Glück</h3>
                    <h4>Professor</h4>
                    <p>Germany</p>
                </div>
            </div>
            <div className="slider-viewall">
                <Link to='/Speakers' className="viewall-button"><p>View All</p></Link>
            </div>
        </>
    )
}
export default slider;