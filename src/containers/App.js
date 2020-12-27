import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";  
import Home from "../contents/Home";
import About from "../contents/About";
import Education from "../contents/Education";
import Skills from "../contents/Skills";
import Projects from "../contents/Projects";
import Contact from "../contents/Contact";
// import CustomChatbot from "../components/Chatbot/CustomChatbot";
import OnClickHandler from "../contents/OnClickHandler";


function App() {
  return (
    <Router>
      <div className="App">
        {/* <CustomChatbot /> */}
        <OnClickHandler/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
