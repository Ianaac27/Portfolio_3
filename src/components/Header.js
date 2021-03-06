import React from "react";
import "../styles/Header.css";
import "../styles/Responsive.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import resume_pdf from "../images/Ian_Fleshman-Cooper_Resume.pdf";

function Header({handleNavbarModule, handleNavbarLink}) {
    return (
        <header>
            <div>
                <h1 id="today-date"></h1>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={handleNavbarModule}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <nav className="nav">
                <ul className="navlinks">
                    <li className="nav-link" onClick={handleNavbarLink}><a href="/">Home</a></li>
                    <li className="nav-link" onClick={handleNavbarLink}><a href="/#aboutMe">About Me</a></li>
                    <li className="nav-link" onClick={handleNavbarLink}><a href="/#work">Work</a></li>
                    <li className="nav-link" onClick={handleNavbarLink}><a href="/#skill">Skills</a></li>
                    <li className="nav-link" onClick={handleNavbarLink}><a href="/#contactMe">Contact Me</a></li>
                    <li className="nav-link" onClick={handleNavbarLink}><a href="../images/Ian_Fleshman-Cooper_Resume.pdf" download="Ian_Fleshman-Cooper_Resume.pdf">Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
