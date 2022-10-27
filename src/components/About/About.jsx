import React from "react";
import file from "../../assets/files/Resume_Kamal_Byanjankar.pdf";
import image from "../../assets/profile/kamal.png"
import "./About.css"

const About = () => {
  return(
    <div className="header about">
      <h1>About</h1>
      <div className="about__content">
        <div className="about__image">
          <img src={image} alt="self"/>
        </div>
        <div className="about__linespace">
          Hi! My name is Kamal Byanjankar and I am from Nepal. I did my Master in Engineering in Information Technology from 
          Frankfurt University of Applied Scienes. I completed my Master study with a final thesis on  
          <b> Recognition of Small Stone Obstacles for Autonomous Driving</b> using Machine Learning algorithms. I did 
          my Bachelor in Engineering in Electronics and Communication Engineering from Kantipur Engineering College in Nepal with a 
          final year project on <b>Automatic Solar Charger with Tracking</b>.
          <br/>
          <br/>
          Currently, I am doing projects on Reactjs and Java Spring boot. During my Master's, as a part of curriculum projects, I have 
          done projects using Java, python, and C# programming languages. As learning is a never ending process, I have been doing 
          projects to improve my knowledge and skills. All the projects are available in <a 
            href="https://github.com/kamalByanjankar" 
            target="_blank"
            rel="noopener noreferrer"> 
             Github
          </a>.
          <br/>
          <br/>
          I am a motivated and open minded person, trying to achieve my goals. Talking about my hobbies, I like to read, 
          listen music, and travelling.
        </div>
      </div>
      <div className="about__resume__download">
        <a href={file} download="Resume_Kamal_Byanjankar">
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default About;
