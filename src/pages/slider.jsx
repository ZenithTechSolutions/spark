import '../styles/slider.css'
import { Link } from 'react-router-dom'
import vishal from '../assets/vishal.png'
import vignesh from '../assets/vignesh.png'
import sadhur from '../assets/sadhur.png'
import pradeep from '../assets/pradeep.png'
import giri from '../assets/giri.jpg'


function slider() {
    return (
        <>
            <div className="wrapper">
                <div className="item item1">
                    <img src={vishal} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item2">
                    <img src={vignesh} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item3">
                    <img src={sadhur} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item4">
                    <img src={pradeep} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item5">
                    <img src={giri} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item6">
                    <img src={vishal} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item7">
                    <img src={vignesh} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit!</p>
                </div>
                <div className="item item8">
                    <img src={sadhur} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, illo.</p>
                </div>
            </div>
            <div class="slider-viewall">
                <Link to='/Speakers' className="viewall-button">View All</Link>
            </div>
        </>
    )
}
export default slider;