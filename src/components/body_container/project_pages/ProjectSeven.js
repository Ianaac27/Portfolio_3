import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import note_taker_img from "../../../images/project_images/note_taker.jpg";

function Project7() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Note Taker</h2>
                    <p className="para-subtitle-accent" id="project-sub">The to-do list</p>
                    <div className="section-body">
                        <p className="para-project">This is an application that allows the user to create, save, and delete notes. This project uses Express.JS to create and pass a local API set within a JSON file. I was responsible for developing API and HTML Routes so that the user can dynamically add and save, or delete content within the JSON file, and then in response, the application will display the content on the page. I also had to dynamically generate unique ID's for reach note created so that the save and delete functions could function appropriately.</p>
                    </div> 
             </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://note-taker-ifc.herokuapp.com/"><img className="portfolio-img" id="project-img" src={note_taker_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://note-taker-ifc.herokuapp.com/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Note_Taker">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project7;