import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import employee_directory_img from "../../../images/project_images/employee_directory.jpg";

function Project13() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Employee Directory</h2>
                    <p className="para-subtitle-accent" id="project-sub">Check the directory</p>
                    <div className="section-body">
                        <p className="para-project">The Employee Directory is an app in which organizes and protects employee information by filtering searches based on the employee’s first and last name. This app is populated with the Random User npm package, and uses React.js to establish the rendering components and functionality for each component.</p>
                        <p className="para-project">A couple of the functions developed within this app is the search function in which filters each employee’s first and last name, as well as a sort function which sorts the directory of employees by last name. I also utilized Bootstrap as the foundation for the styling and responsiveness for this app.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://ianaac27.github.io/Employee_Directory/"><img className="portfolio-img" id="project-img" src={employee_directory_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://ianaac27.github.io/Employee_Directory/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Employee_Directory">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project13;