import React from "react";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import MySkills from "./MySkills";


function Home() {
    return (
        <main>
            <Introduction />
            <AboutMe />
            <MyWork />
            <MySkills />
        </main>
    )
}

export default Home;