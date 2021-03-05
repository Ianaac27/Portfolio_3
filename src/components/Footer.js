import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="content" id="contactMe">
            <h1 id="contact-title">Contact Me</h1>
            <p><a id="email" className="icon-item" href= "mailto:ian.fleshmancooper@gmail.com">ian.fleshmancooper@gmail.com</a></p>
            <div id="contact-icons d-flex justify-content-center align-items-center">
                <a className="icon-item" href= "https://github.com/Ianaac27">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a className="icon-item" href= "https://www.linkedin.com/in/ian-fleshman-cooper-934995163/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;