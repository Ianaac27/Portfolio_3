import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import budget_tracker_img from "../../../images/project_images/budget_tracker.jpg";

function Project12() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Budget Tracker</h2>
                    <p className="para-subtitle-accent" id="project-sub">Stay on budget</p>
                    <div className="section-body">
                        <p className="para-project">The Budget Tracker is an app that allows users to track their transactions to help establish a more organized budget. The app is easy to use as users can add money to their budget and then subtract transactions as their budget is spent. A line graph of the user’s transactions is also displayed for visualization and further organization. This project uses Express.JS for establishing API routes as well as MongoDB as its database. On the front end, this app is developed through HTML, CSS, JavaScript and chart.js. In case the user was to go offline, I was responsible for syncing the app through IndexDB so that the user can still utilize the app while not online. Once the user is back online, their pending transactions will update automatically and will continue to be stored through MongoDB.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://budget-tracker-ifc.herokuapp.com/"><img className="portfolio-img" id="project-img" src={budget_tracker_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://budget-tracker-ifc.herokuapp.com/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Budget_Tracker">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project12;