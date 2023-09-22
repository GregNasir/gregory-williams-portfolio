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
    

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
        <div className="container portfolio-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                idx={15}
                />
            </h1>
            <p className='portfolio-p'>
                Below please find a some of the projects, I have worked on individually, 
                or as part of a group of developers. My GitHub repository can also
                be accessed <a href="https://github.com/GregNasir" className='github-link'>here</a>
            </p>
            
            

            {/* magic wall section */}
            
            <div id="home-magicwall" className="fake-magicwall">
                <ul>
                    <li className='baseball'>
                    <p className='hello'><a href="https://jako0320.github.io/baseball_statsandodds/" target="_blank" rel="noopener noreferrer">Baseball Stats and Odds</a></p>
                    
                    {/* <p className='hello'><a href="https://github.com/GregNasir/baseball_statsandodds" target="_blank" rel="noopener noreferrer">Project Repo </a></p> */}
                        <div className="magic-wall_item lazyload "></div>
                            <img src={BaseballO} alt='image'></img>
                        <div className="hover-content">
                            </div>
                        <a href='https://jako0320.github.io/baseball_statsandodds/' className='colorbox'></a>
                    </li>
                    
                    <li className='baseball2'>
                    <p className='hello'><a href="https://glacial-thicket-98751-ead1051b20e4.herokuapp.com/login" target="_blank" rel="noopener noreferrer">Productivity Pal</a></p>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={ProdPal} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='https://glacial-thicket-98751-ead1051b20e4.herokuapp.com/login' className='colorbox'></a>
                    </li>
                
                    <li className='baseball3'>
                    <p className='hello'><a href="https://notetakerzzz-f979f98b76f3.herokuapp.com/" target="_blank" rel="noopener noreferrer">Notetakerzz</a></p>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={NoteTaker} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='https://notetakerzzz-f979f98b76f3.herokuapp.com/' className='colorbox'></a>
                    </li>
                    <li className='baseball4'>
                        <p className='hello'><a href="https://inspire-tech-blog-9d94a91a774d.herokuapp.com/" target="_blank" rel="noopener noreferrer">Inspire Tech Blog</a></p>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={TechBlog} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='https://inspire-tech-blog-9d94a91a774d.herokuapp.com/' className='colorbox'></a>
                    </li>
                    <li className='baseball5'>
                        <p className='hello'><a href="https://happenhubsearch-a6304aac1562.herokuapp.com/" target="_blank" rel="noopener noreferrer">HappenHub</a></p>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={WeatherDash} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='https://happenhubsearch-a6304aac1562.herokuapp.com/' className='colorbox'></a>
                    </li>
                    <li className='baseball6'>
                        <p className='hello'><a href="https://gregnasir.github.io/work-day-scheduler/" target="_blank" rel="noopener noreferrer">Work Day Scheduler</a></p>
                        <div className="magic-wall_item lazyload"></div>
                        <img src={WorkDay} alt='image'></img>
                        <div className="hover-content"></div>
                        <a href='https://gregnasir.github.io/work-day-scheduler/' className='colorbox'></a>
                    </li>

                </ul>
            </div>
        </div>
        {/* <footer className="footer">
            <h3>Portfolio &copy; COPYRIGHT 2023 Gregory Williams.</h3>
        </footer> */}
            
        </div>
        {/* <Loader type="pacman" /> */}
        <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}

export default Portfolio;