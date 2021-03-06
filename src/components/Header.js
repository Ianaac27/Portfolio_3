import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import pdf from '../pdf/ian_fcooper_resume.pdf'
import Moment from 'react-moment';


function Header({handleNavbarModule, handleNavbarLink}) {
    
    return (
        <header>
            <div id="today-date">
                <Moment local interval={1000}></Moment>
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
                    <li className="nav-link" onClick={handleNavbarLink}><a href={pdf}>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
