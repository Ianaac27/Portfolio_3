import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import read_me_img from "../../../images/project_images/read_me.jpg";

function Project6() {
    return (
        <main className="project-main">
              <section className="project-left">
                 <h2 className="section-title" id="project-title">ReadMe Generator</h2>
                 <p className="para-subtitle-accent" id="project-sub">Keep it simple</p>
                 <div className="section-body">
                    <p className="para-project">The ReadMe Generator is an application that generates README.md files. This is processed by using prompts within node.JS, which is done through the npm "Inquirer". This project demonstrates my skils in JavaScript as well as in Node.JS.</p>
                 </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://drive.google.com/file/d/1RBXLx5R22cEjfbSk_yH26QOU5PRhq_6T/view"><img className="portfolio-img" id="project-img" src={read_me_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://drive.google.com/file/d/1RBXLx5R22cEjfbSk_yH26QOU5PRhq_6T/view">Tutorial
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/ReadMe_Generator">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project6;