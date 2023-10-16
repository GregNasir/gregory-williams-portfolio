import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const Resume = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['R', 'e', 's', 'u', 'm', 'e']}
                idx={15}
                />
            </h1>
            <div >
            {/* <iframe src="https://drive.google.com/file/d/1PBy__uWnjbYoNV0tApjUC4Menzbiw9IB/preview" width="640" height="880" allow="autoplay"></iframe> */}
            <a href="https://docs.google.com/document/d/1-xV7URWNitDMsW0OTYlKzF7-TjdU04W4hF2pdO_3P4s/export?format=pdf"  >
                <iframe className='resume-download' src="https://docs.google.com/file/d/1-xV7URWNitDMsW0OTYlKzF7-TjdU04W4hF2pdO_3P4s/preview" 
                width="640" height="880" allow="autoplay"></iframe>
            </a>

            {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ4GxK-JLETeHNqHIdbcOcOCQG4xxp1k-evFkcXRqQOix6mycPdtg3peE2h-aoNLDqxHT3vO7jAacrb/pub?embedded=true" width="640" height="880" allow="autoplay"></iframe> */}
            
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

export default Resume;