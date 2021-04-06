import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import progressing_img from "../../../images/project_images/progressing.png";

function Project14() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Progressing</h2>
                    <p className="para-subtitle-accent" id="project-sub">Track your goals</p>
                    <div className="section-body">
                        <p className="para-project">Progressing is a MERN stack application that allows users to track their progress on life goals in which they set! The user can initially create a new goal by being prompted on what the goal is and asked what steps would be required for accomplishing the goal. They also have the option to select if their goal has a deadline or not. Once created, the goal will then be able to be seen on their dashboard, where they will be able to track their progress through a checklist showing the steps needed to accomplish the goal and they will have the ability to use a note section to log important ideas regarding their overall goal. As the user progresses through their goal, they will be notified with words of encouragement as they accomplish each step. When the final step is reached, the user will reach a 100% completion status for the goal and earn a gold star (badge)!</p>
                        <p className="para-project">During this project, I was responsible for setting up the routing, using react-router-dom, developing the notifications system for the authentication errors, and the encouragement notifications with react-toastify. As well as, developing the algorithms and functionality to dynamically render the nested list of steps and to display the correct percentage for the circular progress bar, while toggling the steps for each goal. These algorithms were created using virtuals within the goals’ schema.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://drive.google.com/file/d/1x5CLyP7qBkGz2qVLEVHiD-VAS0JG6RDQ/view"><img className="portfolio-img" id="project-img" src={progressing_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://progressing-pod10.herokuapp.com/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/JJHPhoto/progressing">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project14;