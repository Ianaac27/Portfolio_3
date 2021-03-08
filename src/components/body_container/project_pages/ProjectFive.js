import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import team_summary_img from "../../../images/project_images/team_summary_1.jpg";

function Project5() {
    return (
        <main className="project-main">
              <section className="project-left">
                 <h2 className="section-title" id="project-title">Employee Team Summary</h2>
                 <p className="para-subtitle-accent" id="project-sub">Know your team</p>
                 <div className="section-body">
                    <p className="para-project">Need to pull a quick summary for all your team members? This application generates a responsive HTML page that displays all of the team members on your development team along with their roles and contact information. This is processed through npm "Inquirer" in which gives the user a set of prompts that helps provide information for all members of the team. This project demonstrates my skillset in JavaScript, Node.JS, npm "Inquirer", as well as unit testing through Jest. I have also utilized some of my CSS skills to bring more style and responsiveness to the generated page.</p>
                 </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://drive.google.com/file/d/1SZ1SxMxBqum1wyx8Ey3jFJGesAiTLqfe/view"><img className="portfolio-img" id="project-img" src={team_summary_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://drive.google.com/file/d/1SZ1SxMxBqum1wyx8Ey3jFJGesAiTLqfe/view">Tutorial
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Employee_Team_Summary">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project5;