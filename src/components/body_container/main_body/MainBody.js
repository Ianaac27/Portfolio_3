import React from "react";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import MySkills from "./MySkills";


function MainBody() {
    return (
        <main>
            <Introduction />
            <AboutMe />
            <MyWork />
            <MySkills />
        </main>
    )
}

export default MainBody;