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
            <div className="wrapper">
                <div className="item item1">
                    <img src={s1} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item2">
                    <img src={s2} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item3">
                    <img src={s3} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item4">
                    <img src={s4} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item5">
                    <img src={s5} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item6">
                    <img src={s1} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item7">
                    <img src={s2} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item8">
                    <img src={s3} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, illo.</p>
                </div>
            </div>
            <div className="slider-viewall">
                <Link to='/Speakers' className="viewall-button"><p>View All</p></Link>
            </div>
        </>
    )
}
export default slider;