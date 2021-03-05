import React from "react";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyWork from "./MyWork";

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