import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import booksearch_img from "../../../images/project_images/book2.jpg";

function Project16() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">Book Search</h2>
                    <p className="para-subtitle-accent" id="project-sub">Search and save</p>
                    <div className="section-body">
                        <p className="para-project">The Book Search is an app that allows users to search for any book utilizing the Google Books API. When the user finds a book of their liking, they then can either view the book independently through Google Books or save their book to a book list. If the user no longer desires their book to be within their book list, they have the option to delete it. This app was developed with MERN Stack technologies along with other dependencies such as, react-bootstrap, react-router-dom, mongoose, and react-notifications-component. Also, as mentioned above, the app utilizes the Google Books API as a big contributor in populating the app when the user searches for a book. I was responsible for developing all aspects of the MERN Stack in this application. These responsibilities included developing the MongoDB schema, applying the Google Books api, establishing api routes through mongoose and React to collect and store data, and developing CRUD functions and styling on the frontend.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://book-search-ifc.herokuapp.com/"><img className="portfolio-img" id="project-img" src={booksearch_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://book-search-ifc.herokuapp.com/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/Book_Search">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project16;