import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import weather_img from "../../../images/project_images/weather.jpg";

function Project3() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Weather Dashboard</h2>
                    <p className="para-subtitle-accent" id="project-sub">Grab a jacket</p>
                    <div className="section-body">
                        <p className="para-project">Here is a weather app that gives any user the daily and weekly forecast for any city they search. This application features the the Open Weather API which stores all of the data needed to gather the most updated weather conditions for any city. Along with this, I also utulized the moments.js API to capture the current date as well as the dates for the next five days. This app will also store the users' most recent search, so they can come back and check the current weather whenever they need. This project demonstrates some of my skill and knowledge in applying API's, JQuery, as well as Bootstrap for styling.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://ianaac27.github.io/Weather_App/"><img className="portfolio-img" id="project-img" src={weather_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://ianaac27.github.io/Weather_App/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Weather_App">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project3;