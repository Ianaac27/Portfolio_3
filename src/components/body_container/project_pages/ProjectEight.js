import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import employee_tracker_img from "../../../images/project_images/employee_tracker.jpg";

function Project8() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Employee Tracker</h2>
                    <p className="para-subtitle-accent" id="project-sub">Track your team</p>
                    <div className="section-body">
                        <p className="para-project">An application that allows employers to help manage their company employees. This application utilizes node.js and MySQL as a database to store and query specific sets of data. Npm inquirer is also used to prompt the user on which data they would like access within the employee management database. Some functions this application provides are the ability to add and remove company employees, roles, and departments. The user is also able to update any necessary employee information while also being able to pull reports such as the utility budget for each department. This application demonstrates my ability in being to develop databases through MySQL, and then to connect the database through node.js so the user is able to retrieve and store sets up data.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://drive.google.com/file/d/1Fldk6dKDJxZUS4lZ9z5f2ix2ypP03kpN/view"><img className="portfolio-img" id="project-img" src={employee_tracker_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://drive.google.com/file/d/1Fldk6dKDJxZUS4lZ9z5f2ix2ypP03kpN/view">Tutorial
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Employee_Tracker">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project8;