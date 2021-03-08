import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/body_container/home/Home";

//Project pages
import Project1 from "./components/body_container/project_pages/ProjectOne";
import Project2 from "./components/body_container/project_pages/ProjectTwo";
import Project3 from "./components/body_container/project_pages/ProjectThree";
import Project4 from "./components/body_container/project_pages/ProjectFour";
import Project5 from "./components/body_container/project_pages/ProjectFive";
import Project6 from "./components/body_container/project_pages/ProjectSix";
import Project7 from "./components/body_container/project_pages/ProjectSeven";
import Project8 from "./components/body_container/project_pages/ProjectEight";
import Project9 from "./components/body_container/project_pages/ProjectNine";
import Project10 from "./components/body_container/project_pages/ProjectTen";


class App extends React.Component {

handleNavbarModule = event => {  
    document.body.classList.toggle('nav-open');
}

handleNavbarLink = event => {
    document.body.classList.remove('nav-open');
}

render() {
  return (
    <div>
      <Router>
        <Header handleNavbarLink= {this.handleNavbarLink} handleNavbarModule= {this.handleNavbarModule} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/daily_planner"><Project1 /></Route>
            <Route path="/password_generator"><Project2 /></Route>
            <Route path="/weather_dashboard"><Project3 /></Route>
            <Route path="/game_gif"><Project4 /></Route>
            <Route path="/employee_team_summary"><Project5 /></Route>
            <Route path="/read_me_generator"><Project6 /></Route>
            <Route path="/note_taker"><Project7 /></Route>
            <Route path="/employee_tracker"><Project8 /></Route>
            <Route path="/burger_devourer"><Project9 /></Route>
            <Route path="/neighborhood"><Project10 /></Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

}

export default App;
