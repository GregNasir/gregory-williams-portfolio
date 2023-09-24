// import { useEffect, useState } from 'react'
// import Loader from 'react-loaders'
// // import { useRef } from 'react'
// import AnimatedLetters from '../AnimatedLetters'
// import BaseballO from '../../assets/images/baseball-stats-and-odds.png';
// import ProdPal from '../../assets/images/Productivity-Pal.png';
// import NoteTaker from '../../assets/images/note-taker.png';
// import TechBlog from '../../assets/images/Inspire-tech-blog.png';
// import HappenHub from '../../assets/images/HappenHub-Screenshot.png';
// import WorkDay from '../../assets/images/work-day-scheduler.png';
// import './index.scss'


// const Portfolio = () => {
//     const [letterClass, setLetterClass] = useState('text-animate')
    

//     useEffect(() => {
//         setTimeout(() => {
//             return setLetterClass('text-animate-hover')
//         }, 3000)
//     }, [])


//     return (
//         <>
//         <div className="container portfolio-page">
//             <div className="text-zone">
//             <h1>
//                 <AnimatedLetters
//                 letterClass={letterClass}
//                 strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
//                 idx={15}
//                 />
//             </h1>
//             <p className='portfolio-p'>
//                 Below please find a some of the projects, I have worked on individually, 
//                 or as part of a group of developers. My GitHub repository can also
//                 be accessed <a href="https://github.com/GregNasir" className='github-link'>here</a>
//             </p>
            
            

//             {/* magic wall section */}
            
//             <div id="home-magicwall" className="fake-magicwall">
//                 <ul>
//                     <li className='baseball'>
//                     <p className='hello'><a href="https://jako0320.github.io/baseball_statsandodds/" target="_blank" rel="noopener noreferrer">Baseball Stats and Odds</a></p>
                    
//                     {/* <p className='hello'><a href="https://github.com/GregNasir/baseball_statsandodds" target="_blank" rel="noopener noreferrer">Project Repo </a></p> */}
//                         <div className="magic-wall_item lazyload "></div>
//                             <img src={BaseballO} alt='image'></img>
//                         <div className="hover-content">
//                             </div>
//                         <a href='https://jako0320.github.io/baseball_statsandodds/' className='colorbox'></a>
//                     </li>
                    
//                     <li className='baseball2'>
//                     <p className='hello'><a href="https://glacial-thicket-98751-ead1051b20e4.herokuapp.com/login" target="_blank" rel="noopener noreferrer">Productivity Pal</a></p>
//                         <div className="magic-wall_item lazyload"></div>
//                         <img src={ProdPal} alt='image'></img>
//                         <div className="hover-content"></div>
//                         <a href='https://glacial-thicket-98751-ead1051b20e4.herokuapp.com/login' className='colorbox'></a>
//                     </li>
                
//                     <li className='baseball3'>
//                     <p className='hello'><a href="https://notetakerzzz-f979f98b76f3.herokuapp.com/" target="_blank" rel="noopener noreferrer">Notetakerzz</a></p>
//                         <div className="magic-wall_item lazyload"></div>
//                         <img src={NoteTaker} alt='image'></img>
//                         <div className="hover-content"></div>
//                         <a href='https://notetakerzzz-f979f98b76f3.herokuapp.com/' className='colorbox'></a>
//                     </li>
//                     <li className='baseball4'>
//                         <p className='hello'><a href="https://inspire-tech-blog-9d94a91a774d.herokuapp.com/" target="_blank" rel="noopener noreferrer">Inspire Tech Blog</a></p>
//                         <div className="magic-wall_item lazyload"></div>
//                         <img src={TechBlog} alt='image'></img>
//                         <div className="hover-content"></div>
//                         <a href='https://inspire-tech-blog-9d94a91a774d.herokuapp.com/' className='colorbox'></a>
//                     </li>
//                     <li className='baseball5'>
//                         <p className='hello'><a href="https://happenhubsearch-a6304aac1562.herokuapp.com/" target="_blank" rel="noopener noreferrer">HappenHub</a></p>
//                         <div className="magic-wall_item lazyload"></div>
//                         <img src={HappenHub} alt='image'></img>
//                         <div className="hover-content"></div>
//                         <a href='https://happenhubsearch-a6304aac1562.herokuapp.com/' className='colorbox'></a>
//                     </li>
//                     <li className='baseball6'>
//                         <p className='hello'><a href="https://gregnasir.github.io/work-day-scheduler/" target="_blank" rel="noopener noreferrer">Work Day Scheduler</a></p>
//                         <div className="magic-wall_item lazyload"></div>
//                         <img src={WorkDay} alt='image'></img>
//                         <div className="hover-content"></div>
//                         <a href='https://gregnasir.github.io/work-day-scheduler/' className='colorbox'></a>
//                     </li>

//                 </ul>
//             </div>
//         </div>
//         {/* <footer className="footer">
//             <h3>Portfolio &copy; COPYRIGHT 2023 Gregory Williams.</h3>
//         </footer> */}
            
//         </div>
//         {/* <Loader type="pacman" /> */}
//         <Loader type="ball-clip-rotate-pulse" />
//         </>
//     )
// }

// export default Portfolio;


import React from "react";
import "./index.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "./content_option";

const Portfolio = () => {
    return (
        <HelmetProvider>
        <Container className="About-header">
            <Helmet>
            <meta charSet="utf-8" />
            <title> Portfolio | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
            </Helmet>
            <Row className="mb-5 mt-3 pt-md-3 portfolio-cos">
            <Col lg="8">
                <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
            </Row>
            <div className="mb-5 po_items_ho">
            {dataportfolio.map((data, i) => {
                return (
                <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                    <p>{data.description}</p>
                    <p><a href={data.link}>view project</a></p>
                    
                    <a href={data.link2}>view repository</a>
                    
                    </div>
                </div>
                );
            })}
            </div>
        </Container>
        </HelmetProvider>
    );
};

export default Portfolio;