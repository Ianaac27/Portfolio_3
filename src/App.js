import React from "react";
import MainBody from "./components/body_container/main_body/MainBody";

class App extends React.Component {

//rendering into HTML format  
render() {
  return (
    <div className="container">
      <MainBody />
    </div>
  );
}

}

export default App;
