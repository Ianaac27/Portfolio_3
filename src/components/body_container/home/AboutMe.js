import React from "react";
import "../../../styles/AboutMe.css";

function AboutMe() {
    return (
        <section className="content" id="aboutMe">
            <div classNameName="container" id="about-me-section">
                <h2 className="section-title" id="about-me-title">Who I am</h2>
                <p className="para-subtitle-accent" id="about-me-sub">A developer and more</p>
                <div className="section-body">
                    <p className="para-about">I recently graduated from the University of Washington with a certficate in Full Stack Development. I also earned a BA in Mathematics and Business Administration IT from Northwest University in 2020 with Summa Cum Laude honors. Some of the skills and knowledge that I have been able to inquire from my education are in JavaScript, Ruby, Ruby on Rails, React JS, HTML, CSS, jQuery, MongoDB, MySQL, Node.JS as well as going in depth with algorithms, efficiency, data structures, and data management within Information Systems.</p>
                    <p className="para-about">I currently work fulltime at Northwest University as an Academic Advisor for their online program referred to as NPP. This position has granted me much experience in developing systems to help manage students in their success to earn their degree. This job has also given me experience in managing multiple tasks, act as a consultant for students and team lead for my colleagues, as well as work with my team to find solutions for more fluency and efficiency within our systems.</p> 
                    <p className="para-about">Overall, I am an easygoing individual with a drive to learn and achieve personal, as well as team-oriented goals.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;