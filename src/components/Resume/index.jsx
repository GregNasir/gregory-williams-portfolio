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
            <div>
                <iframe  src="https://drive.google.com/file/d/1_hqIPRqLmJfY87vSrHnsU1sfQsmrUujs/preview" width="640" height="770" allow="autoplay"></iframe>
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