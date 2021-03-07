import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/body_container/home/Home";
import Project1 from "./components/body_container/project_pages/ProjectOne";
import Project2 from "./components/body_container/project_pages/ProjectTwo"


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
            <Route path="/project1">
              <Project1 />
            </Route>
            <Route path="/project2">
              <Project2 />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

}

export default App;
