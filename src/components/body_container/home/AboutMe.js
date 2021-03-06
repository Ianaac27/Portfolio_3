import React from "react";
import "../../../styles/AboutMe.css";
import "../../../styles/Responsive.css";

function AboutMe() {
    return (
        <section className="content" id="aboutMe">
            <div classNameName="container" id="about-me-section">
                <h2 className="section-title" id="about-me-title">Who I am</h2>
                <p className="para-subtitle-accent" id="about-me-sub">Progressing developer and more</p>
                <div className="section-body">
                    <p className="para-about">I am a recent graduate from Northwest University earning a degree in Mathematics and Information Technology. I am currently enrolled at the University of Washington taking part in their Full-stack Coding Bootcamp Program. Some of the skills that I have been able to inquire from this program are JavaScript, HTML, CSS, jQuery, React JS, MongoDB, Node.JS as well as going in depth with Algorithms, Efficiency, and Data Structures.</p>
                    <p className="para-about">I also currently work fulltime at Northwest University as an Academic Advisor for their online program referred to as NPP. This position has granted me much experience in developing systems to help manage students in their success to earn their degree. This job has also given me experience in managing multiple tasks, act as a consultant for students and team lead for my colleagues, as well as work with my team to find solutions for more fluency in our systems.</p> 
                    <p className="para-about">Overall, I am an easygoing individual with a drive to learn and achieve personal, as well as team-oriented goals.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;