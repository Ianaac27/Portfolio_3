import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import password_gen_img from "../../../images/project_images/password.jpg";

function Project2() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Password Generator</h2>
                    <p className="para-subtitle-accent" id="project-sub">Keep it safe</p>
                    <div className="section-body">
                        <p className="para-project">This Password Generator features my skillset in JavaScript by applying a chain of functions to generate a randomized, unsolvable password. When selecting the "Generate Password" button, a series of prompts and confirmations should allow the user to select the character types they wish to be applied within their randomized generated password. The user can also decide to reset their password by selecting the "Reset Password" button, in which they can go through the series of confirmations again to generate a new password. I was also able to utulize some of my skillset with CSS by giving the application a stylish technological interface.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://ianaac27.github.io/Password_Generator/"><img className="portfolio-img" id="project-img" src={password_gen_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://ianaac27.github.io/Password_Generator/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Password_Generator">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project2;