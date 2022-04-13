import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";  
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
// import CustomChatbot from "../components/Chatbot/CustomChatbot";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
    // <Router>
    //   <div className="app">
    //     {/* <CustomChatbot /> */}
    //     <Navbar />
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/about" component={About} />
    //       <Route path="/education" component={Education} />
    //       <Route path="/skills" component={Skills} />
    //       <Route path="/projects" component={Projects} />
    //       <Route path="/contact" component={Contact} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
