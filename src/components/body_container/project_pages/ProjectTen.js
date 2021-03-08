import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import neighborhood_img from "../../../images/project_images/neighborhood2.jpg";

function Project10() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">The Neighborhood</h2>
                    <p className="para-subtitle-accent" id="project-sub">Get connected</p>
                    <div className="section-body">
                        <p className="para-project">The Neighborhood is a virtual neighborhood that allows users to connect with others based on common interest. With COVID running the world, finding connection, friendship, and socializing outside of the home has become more complicated than ever. Users have the freedom to create a variety of interests for others to get connected, and who may share the same interest. At this point, the app only offers user connection via email, however, there is much room for future development and improvement to grow the app in other means of communication.</p>
                        <p className="para-project">This app was created to demonstrate our development teams’ ability to gather user input and store that information within a MySQL database. From here we can insert, display, and update user information and category information to make the app function as it does.</p>
                        <p className="para-project">My role in this project was mainly on the backend as I was responsible for setting up the database and utilizing Sequelize to connect the database, as well as establish API routes for specific queries. As mentioned, our app has the functionality to add new users and categories, display the user and category information, as well as update the users Category ID so they can change their interests. The relationship between the tables is currently a One-to-Many but has room to improve to Many-to-Many so users can have the ability to choose many interests at a time, rather than one.</p>
                        <p className="para-project">I was also responsible for majority of the functionality within the website utilizing jQuery, ajax, and Handlebars.js, as well as the websites responsiveness for mobile friendliness.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://neighborhood-connectwithothers.herokuapp.com/"><img className="portfolio-img" id="project-img" src={neighborhood_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://neighborhood-connectwithothers.herokuapp.com/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/zhanez/Neighborhood">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project10;