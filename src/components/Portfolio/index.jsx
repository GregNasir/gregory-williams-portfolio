import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import BaseballO from '../../assets/images/baseball-stats-and-odds.png';
import ProdPal from '../../assets/images/Productivity-Pal.png';
import NoteTaker from '../../assets/images/note-taker.png';
import TechBlog from '../../assets/images/Inspire-tech-blog.png';
import WeatherDash from '../../assets/images/weather-dashboard.png';
import WorkDay from '../../assets/images/work-day-scheduler.png';
import './index.scss'


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    

    // useEffect(() => {
    //     return setTimeout(() => {
    //     setLetterClass('text-animate-hover')
    //     }, 3000)
    // }, [])


    return (
        <>
        <div className="container portfolio-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'o']}
                idx={15}
                />
            </h1>
            <p>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using below form either.
            </p>
            
            

            {/* magic wall section */}
            
            <div id="home-magicwall" className="fake-magicwall">
                <ul>
                    <li>
                    
                        <div className="magic-wall_item lazyload"></div>
                            <img src={BaseballO} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='#' className='colorbox'></a>
                    </li>
                    <li>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={ProdPal} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='#' className='colorbox'></a>
                    </li>
                    <li>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={NoteTaker} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='#' className='colorbox'></a>
                    </li>
                    <li>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={TechBlog} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='#' className='colorbox'></a>
                    </li>
                    <li>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={WeatherDash} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='#' className='colorbox'></a>
                    </li>
                    <li>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={WorkDay} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='#' className='colorbox'></a>
                    </li>

                </ul>
            </div>
        </div>
            
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Portfolio;