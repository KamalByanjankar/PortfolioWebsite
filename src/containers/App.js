import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";  
import Home from "../contents/Home";
import About from "../contents/About";
import Education from "../contents/Education";
import Skills from "../contents/Skills";
import Projects from "../contents/Projects";
import Contact from "../contents/Contact";
// import CustomChatbot from "../components/Chatbot/CustomChatbot";
import OnClickHandler from "../contents/OnClickHandler"


function App() {
  return (
    <Router>
      <div className="App">
        {/* <CustomChatbot /> */}
        <OnClickHandler/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
