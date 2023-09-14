import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
// import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','G', 'r', 'e', 'g', 'o', 'r', 'y']; 
    const jobArray = ['f','u','l','l','-','s','t','a','c','k',' ','w','e','b',' ','d','e','v','e','l','o','p','e','r','.',]
    
    useEffect(() => {
      setTimeout(() => {
          return setLetterClass('text-animate-hover')
      }, 3000)
  }, [])
      
    return (
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> 
                <br />
                <span className={`${letterClass} _13`}>i</span> 
                <span className={`${letterClass} _14`}>'m,</span> 
                {/* <img src={LogoTitle} alt="developer" /> */}
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                <br />
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                </h1>
                <h2>Full-Stack Developer / JavaScript/ React/ MySQL/ NoSQL/ HTML/ CSS</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                {/* <Logo /> */}

                

                    {/* <ul className='linkedin-github'>
                <li>
                <a
                    href="https://www.linkedin.com/in/gregory-o-williams-22361b1b4/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                    icon={faLinkedin}
                    color="#4d4d4e"
                    className="anchor-icon"
                    />
                </a>
                </li>
                <li>
                <a
                    href="https://github.com/GregNasir"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                    />
                </a>
                </li>
                
            </ul> */}
                {/* <footer className="footer"></footer> */}

                {/* <h3>Portfolio &copy; COPYRIGHT 2023 Gregory Williams.</h3>
                
                </footer> */}
                
        </div>

        {/* <Loader type="pacman" /> */}
        <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}

export default Home;