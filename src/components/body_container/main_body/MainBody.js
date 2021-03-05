import React from "react";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import MySkills from "./MySkills";
import Footer from "../../Footer";


function MainBody() {
    return (
        <main>
            <Introduction />
            <AboutMe />
            <MyWork />
            <MySkills />
            <Footer />
        </main>
    )
}

export default MainBody;