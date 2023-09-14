import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer,  Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // const [inputValue, setInputValue] = useState('');
    // const [isFieldFocused, setIsFieldFocused] = useState(false);
    const form = useRef()

    // const handleInputChange = (e) => {
    //     setInputValue(e.target.value);
    //     };
    
    //   const handleFieldFocus = () => {
    //     setIsFieldFocused(true);
    //     };
    
    //   const handleFieldBlur = () => {
    //     setIsFieldFocused(false);
    //     };

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm('service_2k1fnhi', 'template_cypevvx', form.current, 'Qoki1bsHA8JX8IFJZ')
        .then(
            () => {
            alert('Message successfully sent!')
            window.location.reload(false)
            },
            () => {
            alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
        

        <div className="container contact-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p id='contact-text'>
                For any inquires in regard to web development.
            </p>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                        // value={inputValue}
                        // onChange={handleInputChange}
                        // onFocus={handleFieldFocus}
                        // onBlur={handleFieldBlur}
                    />
                    </li>
                    <li>
                    <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                        // value={inputValue}
                        // onChange={handleInputChange}
                        // onFocus={handleFieldFocus}
                        // onBlur={handleFieldBlur}
                    />
                    </li>
                    <li>
                    <textarea
                        placeholder="Message"
                        name="message"
                        required
                    ></textarea>
                    </li>
                    <li>
                    <input type="submit" className="flat-button" value="SEND"
                    
                    // value={inputValue}
                    // onChange={handleInputChange}
                    // onFocus={handleFieldFocus}
                    // onBlur={handleFieldBlur}
                    
                    
                    />
                    </li>
                </ul>
                {/* {isFieldFocused && !inputValue && (
                <div className="notification">This field is required.</div>
                )} */}


                </form>
            </div>
            </div>
            <div className="info-map">
            Gregory Williams,
            <br />
            Atlanta, GA,
            <br />
            United States of America <br />
            <br />
            <span>gregoryo.rwilliams@gmail.com</span>
            </div>

            
            {/* <div className="map-wrap">
            <MapContainer center={[50.5, 30.5]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[50.5, 30.5]}>
                <Popup>Gregory lives in Atlanta, Georgia :</Popup>
                </Marker>
            </MapContainer>
            </div> */}

        {/* <footer className="footer">
            <h3>Portfolio &copy; COPYRIGHT 2023 Gregory Williams.</h3>
        </footer> */}
        </div>
        {/* <Loader type="pacman" /> */}
        <Loader type="ball-clip-rotate-pulse" />
        </>
    )

    
    
}

export default Contact