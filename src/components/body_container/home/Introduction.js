import React from "react";
import "../../../styles/Introduction.css";
import profile_image from "../../../images/profile.jpg";

function Introduction() {
    return (
        <section className="content container" id="intro">
            <img className="portfolio-img" src={profile_image} alt="Profile Picture"/> 
            <div className="intro-info d-flex flex-column">
                <h1 className="section-title">Hi, I am</h1>
                <h2 className="section-title" id="name"><strong>Ian Fleshman-Cooper</strong></h2>
            </div>
            <p className="para-subtitle-accent" id="para-subtitle-intro">Full-Stack Developer</p>
        </section>
    )
}

export default Introduction;