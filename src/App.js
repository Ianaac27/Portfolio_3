import React from "react";
import Header from "./components/Header";
import MainBody from "./components/body_container/main_body/MainBody";
import Footer from "./components/Footer";

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
      <Header handleNavbarLink= {this.handleNavbarLink} handleNavbarModule= {this.handleNavbarModule} />
      <MainBody />
      <Footer />
    </div>
  );
}

}

export default App;
