import React from "react";
import "../../../styles/MyWork.css";

//Import Project Photos
//Row 1
import project1 from "../../../images/project_images/daily-planner.jpg";
import project2 from "../../../images/project_images/password.jpg";
import project3 from "../../../images/project_images/weather.jpg";
import project4 from "../../../images/project_images/game-gif.jpg";
//Row 2
import project5 from "../../../images/project_images/team_summary_1.jpg";
import project6 from "../../../images/project_images/read_me.jpg";
import project7 from "../../../images/project_images/note_taker.jpg";
import project8 from "../../../images/project_images/employee_tracker.jpg";
//Row 3
import project9 from "../../../images/project_images/burgerd5.jpg";
import project10 from "../../../images/project_images/neighborhood2.jpg";

function MyWork() {
    return (
        <section className="content container" id="work">
            <h2 className="section-title" id="work-title"><strong>My work</strong></h2>
            <p className="para-subtitle" id="work-sub">Take a look at my featured projects</p>
            <div className="works">
                <div className="work-row" id="top-row">
                    <a href="planner.html" className="work-item" id="item-one">
                        <img className="work-img" src={project1}/>
                    </a>
                    <a href="password-gen.html" className="work-item" id="item-two">
                        <img className="work-img" src={project2}/>
                    </a>
                    <a href="weather.html" className="work-item" id="item-three">
                        <img className="work-img" src={project3}/>
                    </a>
                    <a href="game-gif.html" className="work-item" id="item-four">
                        <img className="work-img" src={project4}/>
                    </a>
                </div>
                <div className="work-row" id="middle-row">
                    <a href="employee_summary.html" className="work-item" id="item-five">
                        <img className="work-img" src={project5}/>
                    </a>
                    <a href="read_me.html" className="work-item" id="item-six">
                        <img className="work-img" src={project6}/>
                    </a>
                    <a href="note_taker.html" className="work-item" id="item-seven">
                        <img className="work-img" src={project7}/>
                    </a>  
                    <a href="employee_tracker.html" className="work-item" id="item-eight">
                        <img className="work-img" src={project8}/>
                    </a>
                </div>
                <div className="work-row" id="bottom-row">
                    <a href="burger_devourer.html" className="work-item" id="item-nine">
                        <img className="work-img" src={project9}/>
                    </a>
                    <a href="neighborhood.html" className="work-item" id="item-ten">
                        <img className="work-img" src={project10}/>
                    </a>
                </div>
            </div> 
        </section>
    )
}

export default MyWork;