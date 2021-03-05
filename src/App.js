import React from "react";
import Header from "./components/Header";
import MainBody from "./components/body_container/main_body/MainBody";
import Footer from "./components/Footer";

class App extends React.Component {

handleNavbarModule = event => {  
    document.body.classList.toggle('nav-open');
}

handleNavbarLink = event => {
    document.body.classList.remove('nav-open');
}

//rendering into HTML format  
render() {
  return (
    <div>
      <Header handleNavbarLink= {this.handleNavbarLink} handleNavbarModule= {this.handleNavbarModule} />
      <MainBody />
      <Footer />
    </div>
  );
}

}

export default App;
