import './index.scss'
import { useState } from 'react'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    } from '@fortawesome/free-brands-svg-icons'
    import {
    faHome,
    faUser,
    faEnvelope,
    faFile,
    faSuitcase,
    faBars,
    faClose,
    } from '@fortawesome/free-solid-svg-icons'
    import { Link, NavLink } from 'react-router-dom'

    const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
        <Link 
            className="portfolio-name"
            to="/"
            onClick={() => setShowNav(false)}>
            
                    <p>Gregory Williams</p>
               
                {/* <p className='portfolio-name'>Gregory Williams</p> */}
            {/* <img src={LogoS} alt="Logo" /> */}
            {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>

            <NavLink 
                exact="true"
                activeclassname="active"
                to="/home"
                onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink 
                activeclassname="active"
                className="about-link"
                to="/about"
                onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink
                activeclassname="active"
                className="portfolio-link"
                to="/portfolio"
                // activeclassname="active"
                // className="projects-link"
                // to="/projects"
                onClick={() => setShowNav(false)}
                >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>

            <NavLink
                activeclassname="active"
                className="contact-link"
                to="/contact"
                onClick={() => setShowNav(false)}
                >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="resume-link" 
                to="/resume"
                onClick={() => setShowNav(false)}
            >

                <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
            </NavLink>

            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className='close-icon' />
        </nav>

        <ul className='linkedin-github'>
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
            
        </ul>
        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon' />

        

        </div>
    )
}

export default Sidebar




// import { Link, NavLink } from 'react-router-dom';
// import './index.scss';
// // import LogoS from '../../assets/images/logo-s.png';
// // import LogoSubtitle from '../../assets/images/logo_sub.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faFile, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const Sidebar = () => (
//     <div className='nav-bar'>
//         {/* <Link className='logo' to='/'> */}
//         <Link className='Nav-name' to='/'>
//             {/* <img src={LogoS} alt="logo" /> */}
//             <p>Gregory Williams</p>
            
//             {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
//         </Link>
//         <nav>
//             <NavLink   
//                 exact="true" 
//                 activeclassname="active" 
//                 to="/"
//             >
                
//                 <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
//             </NavLink>

//             <NavLink 
//                 exact="true" 
//                 activeclassname="active" 
//                 className="about-link" 
//                 to="/about"
//             >
//                 <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//             </NavLink>


//             <NavLink 
//                 exact="true" 
//                 activeclassname="active" 
//                 className="portfolio-link" 
//                 to="/portfolio"
//             >

//                 <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
//             </NavLink>

//             <NavLink 
//                 exact="true" 
//                 activeclassname="active" 
//                 className="contact-link" 
//                 to="/contact"
//             >

//                 <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//             </NavLink>

//             <NavLink 
//                 exact="true" 
//                 activeclassname="active" 
//                 className="resume-link" 
//                 to="/resume"
//             >

//                 <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
//             </NavLink>

//         </nav>
//         <ul>
//             <li>
//                 <a
//                     target="_blank"
//                     rel="noreferrer"
//                     href="https://www.linkedin.com/in/gregory-o-williams-22361b1b4/"
//                 >
//                     <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
//                 </a>
//             </li>
//             <li>
//                 <a
//                     // target="_blank"
//                     // ref="noreferrer"
//                     href="https://github.com/GregNasir"
//                 >
//                     <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
//                 </a>
//             </li>
//         </ul>
//         <FontAwesomeIcon 
//           onClick={() => setShowNav(true)}
//           icon={faBars}
//           color="#ffd700"
//           size="3x"
//           className='hamburger-icon' />
//     </div>
// )

// export default Sidebar;