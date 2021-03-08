import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import burger_dev_img from "../../../images/project_images/burgerd5.jpg";

function Project9() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Burger Devourer</h2>
                    <p className="para-subtitle-accent" id="project-sub">Eyes on the fries</p>
                    <div className="section-body">
                        <p className="para-project">The Burger Devourer is a fun application that displays my knowledge in MVC and how to provide the user with the ability to view the content, create something new within the content, update, and delete. This is done through the Node.js server while using the npm packages Express, Handlebars, and MySQL. With Node and Express, I am able to connect MySQL workbench so I could have a running database. With this, I am able to configure this data through my ORM and model files of my application. This information would then be passed through the controller and onto the views file which contains the content to display the application and to provide the functions listed above for the user. The main webpage is generated through Handlebars. Once the user inputs their information, it will then pass through to the controller, and back down to the MySQL database for any database modifications. I have deployed this application through Heroku.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://burger-devourer-mvc.herokuapp.com/"><img className="portfolio-img" id="project-img" src={burger_dev_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://burger-devourer-mvc.herokuapp.com/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Burger_Devourer">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project9;