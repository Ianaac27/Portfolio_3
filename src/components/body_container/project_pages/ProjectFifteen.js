import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import forum_img from "../../../images/project_images/forum.jpg";

function Project15() {
    return (
        <main className="project-main">
              <section className="project-left">
                    <h2 className="section-title" id="project-title">IFC Forum</h2>
                    <p className="para-subtitle-accent" id="project-sub">Ask questions</p>
                    <div className="section-body">
                        <p className="para-project">The IFC forum is a website that allows users to seek answers to questions they may have or are looking to start a conversation thread within a community. I had developed this app using Ruby on Rails along with the Ruby Gem packages devise for user authentication processing, and active storage for the ability to store and upload images. Not only can the user post a question with an optional image, but they can also comment on their own or other’s posts. This was accomplished by nesting the comment resources and paths within the post resources and paths. This app also has a search feature that gives the user the option to search for any existing post title within the app for more efficiency.</p>
                        <p className="para-project">For security purposes, I was able to create some restrictions for users and nonusers. Some of these restrictions include updating and deleting comments, which can only be accomplished by the user who created the post/comments while also having to be logged in. Any guest user can view and search posts and comments, but may only be able to create a post or comment if they have an account and are signed in. Displaying a username as the author of a post or comment is another feature that provides a bit more security for the user while also providing identification to other users. This app was deployed through Heroku.</p>
                    </div> 
              </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://ifc-forum.herokuapp.com/"><img className="portfolio-img" id="project-img" src={forum_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://ifc-forum.herokuapp.com/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Ianaac27/rails_forum">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project15;