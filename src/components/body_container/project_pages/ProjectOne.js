import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import daily_planner_img from "../../../images/project_images/daily-planner.jpg";

function Project1() {
    return (
        <main className="project-main">
              <section className="project-left">
                      <h2 className="section-title" id="project-title">Work Day Scheduler</h2>
                      <p className="para-subtitle-accent" id="project-sub">Stay organized</p>
                      <div className="section-body">
                          <p className="para-project">Here is a daily planner for an average work day. This application features the moments.js API to capture real time so that the planner can be used on a daily basis. As real time passes, it will set the background color of each timeslot to indicate whether the time has past, or if it is the current hour, or whether the timeslot has not passed yet. The user is also able to save their notes within each timeslot and come back to it later to review their agenda for the day. This project demonstrates some of my skill and knowledge in applying API's, JQuery, as well as Bootstrap for styling. Go ahead and save your lunch and meeting times with the use of this app!</p>
                      </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://ianaac27.github.io/Work_Day_Scheduler/"><img className="portfolio-img" id="project-img" src={daily_planner_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://ianaac27.github.io/Work_Day_Scheduler/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Work_Day_Scheduler">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project1;
