import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/body_container/home/Home";
import Project1 from "./components/body_container/project_pages/ProjectOne";
import Project2 from "./components/body_container/project_pages/ProjectTwo"


class App extends React.Component {

  // state = {
  //   currentPage: "Home"
  // };

  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

handleNavbarModule = event => {  
    document.body.classList.toggle('nav-open');
}

handleNavbarLink = event => {
    document.body.classList.remove('nav-open');
}

// renderPage= () => {
//   if (this.state.currentPage === "Home") {
//     return <Home />;
//   } else if (this.state.currentPage === "About") {
//     return <About />;
//   } else if (this.state.currentPage === "Blog") {
//     return <Blog />;
//   } else {
//     return <Contact />;
//   }
// }

//rendering into HTML format  
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
