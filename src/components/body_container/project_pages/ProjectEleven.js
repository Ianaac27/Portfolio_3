import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import workout_tracker_img from "../../../images/project_images/workout_tracker1.jpg";

function Project11() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Workout Tracker</h2>
                    <p className="para-subtitle-accent" id="project-sub">Health is wealth</p>
                    <div className="section-body">
                        <p className="para-project">The Workout Tracker is an app that allows users to track their progress in the gym, or outdoors, to maximize their fitness results. The app is very convenient and easy to use as it will display the users most recent workout information as well as provide a stats page which logs all workouts for the last 10 workouts. This project uses Express.JS to help establish API and HTML routes for complete connectivity and utilizes a database through MongoDB. I was responsible for developing the MongoDB schema and then establishing the API and HTML Routes through mongoose.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://workout-tracker-ifc.herokuapp.com/"><img className="portfolio-img" id="project-img" src={workout_tracker_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://workout-tracker-ifc.herokuapp.com/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Workout_Tracker">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project11;