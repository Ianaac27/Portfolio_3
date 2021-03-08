import React from "react";
import "../../../styles/ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import game_gif_img from "../../../images/project_images/game-gif.jpg";

function Project4() {
    return (
        <main className="project-main">
               <section className="project-left">
                    <h2 className="section-title" id="project-title">Game and GIF</h2>
                    <p className="para-subtitle-accent" id="project-sub">Escape the stress</p>
                    <div className="section-body">
                        <p className="para-project">Game and GIF is a website that contains a database of video game information along with a variety of GIFs that correlate with the game. These databases were provided using API’s developed by RAWG and GIPHY.</p>
                        <p className="para-project">The user will simply type in the game they want to search in the search bar, and they will receive customized links, GIFs, a screenshot, a video-link and some basic information on the game. Our website also provides access to six different links, located on the side bar and navigation menu, to keep users plugged into the gaming and GIF online community. These links include news from Polygon, streams from Twitch, shopping on Amazon, and forums on reddit. These links also dynamically give the user access to view these features based on the specific game they had searched.</p> 
                        <p className="para-project">My role within this project was being a part of the back-end team where we applied API’s from RAWG and GIPHY to our JavaScript to make our website more dynamic. With this, I had the opportunity to develop the carousel that holds and displays the GIFs, while also dynamically applying the GIFs to the carousel based on the users’ search. I was also responsible for overall project review and had adjusted certain features, such as, making our side bar and navigation menu more dynamic specific to the searched game.</p>
                    </div> 
               </section>
              
              <section className="project-right">
                  <div className="project-item">
                      <a href="https://tskading.github.io/Game-Meme/"><img className="portfolio-img" id="project-img" src={game_gif_img} alt=""/></a>
                  </div>
                  <div className="project-links">
                      <a className="project-url" href="https://tskading.github.io/Game-Meme/">Live Website
                            <FontAwesomeIcon className="url-icon" icon={faLink}></FontAwesomeIcon>
                      </a>
                      <a className="project-url" href="https://github.com/Tskading/Game-Meme">Git Hub Repository
                            <FontAwesomeIcon className="url-icon" icon={faGithub}></FontAwesomeIcon>
                      </a>
                  </div>  
              </section>  
          </main>
    )
}

export default Project4;