import { useEffect, useState } from 'react'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profilePic from './images/Greg-linkedIn-pic.jpeg';
import './index.scss';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>

        <div className="container about-page">

            <div className='profile-pic'>
            
                
            </div>

            

            <div className="text-zone">

            <img
                    src={profilePic}
                    alt="User Profile"
                    style={{
                    width: '150px', // Set the width as needed
                    height: '150px', // Set the height as needed
                    borderRadius: '50%', // Makes it a circular profile picture
                    }}
                />


                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p id='about-text'>
                    Technology excites me! Seeing a project go from a simple idea, to wire frame, then taking
                    the leap to initiate code, and seeing the product take shape, has always been a wonderful experience. 
                    As a certified Full-Stack Developer, using and learning new methods to create unique and pleasurable 
                    experiences for others motivates my eagerness to commit myself to any opportunities in which
                    I am involved. 
                    <br/>
                    <br/>
                    As a graduate of the Columbia Engineering Full Stack Web Development Bootcamp, with a focus in JavaScript, 
                    I am proficient in many of its frameworks and libraries. These include but are not limited to, React, node,
                    squelize, graphQl, SQL, noSql, along with HTML and CSS3. Garnering these skills has helped me to create 
                    several dynamic and responsive projects. I consider myself a team player who enjoys brainstorming with 
                    fellow developers to come up with the best solutions and code that will ultimately 
                    achieve our project`s goals.
                    <br/>
                    <br/>
                    I am an avid sports fan, and a big supporter of Chelsea Football Club. Fun fact: this portfolio 
                    is actually Chelsea blue. Traveling is one of my favorite hobbies, and taking trips to attend 
                    games, comes second only to my love and admiration for technology and its creative process.
                </p>

                
            
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faLinkedin} color="#0077b5" />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>

            
            
        </div>
        {/* <Loader type="pacman" /> */}
        <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}

export default About