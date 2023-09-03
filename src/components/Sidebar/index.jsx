import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        {/* <Link className='logo' to='/'> */}
        <Link className='Nav-name' to='/'>
            {/* <img src={LogoS} alt="logo" /> */}
            <p>Gregory</p>
            <p>Williams</p>
            {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        </Link>
        <nav>
            <NavLink   
                exact="true" 
                activeclassname="active" 
                to="/"
            >
                
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>


            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="portfolio-link" 
                to="/portfolio"
            >

                <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
            </NavLink>

            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="contact-link" 
                to="/contact"
            >

                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="resume-link" 
                to="/resume"
            >

                <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/gregory-o-williams-22361b1b4/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    // target="_blank"
                    // ref="noreferrer"
                    href="https://github.com/GregNasir"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;