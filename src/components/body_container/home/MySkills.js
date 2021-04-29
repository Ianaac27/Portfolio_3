import React from "react";
import "../../../styles/MySkills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faGem } from '@fortawesome/free-solid-svg-icons'



function MySkills() {
    return (
        <section className="content container" id="skill">
            <h2 className="section-title" id="skill-title"><strong>My skills</strong></h2>
            <div className="skills">
                <div className="skill-row" id="skill-row">
                    <i className="skill-icon">
                        <FontAwesomeIcon icon={faJsSquare}/>
                    </i>
                    <i className="skill-icon">
                        <FontAwesomeIcon icon={faCss3Alt}/>
                    </i>
                    <i className="skill-icon">
                        <FontAwesomeIcon icon={faHtml5}/>
                    </i>
                    <i className="skill-icon">
                        <FontAwesomeIcon icon={faBootstrap}/>
                    </i>
                    <i className="skill-icon">
                        <FontAwesomeIcon icon={faNode}/>
                    </i>
                    <i className="skill-icon">
                        <FontAwesomeIcon icon={faNpm}/>
                    </i>
                    <i className="skill-icon">
                        <FontAwesomeIcon icon={faReact}/>
                    </i>
                    <i className="skill-icon">
                        <FontAwesomeIcon icon={faDatabase}/>
                    </i> 
                    <i className="skill-icon">
                        <FontAwesomeIcon icon={faGem}/>
                    </i>      
                 </div>
            </div> 
        </section>
    )
}

export default MySkills;