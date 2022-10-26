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
        <div className="about__lineSpace">
          I'm Kamal Byanjankar and I am from Nepal. I completed my
          Master in Engineering in Information Technology from Frankfurt University of
          Applied Sciences. I did my Bachelor in Electronics and Communication Engineering 
          from Kantipur Engineering College in Nepal. While doing my Master's, I gradually improved my knowledge and skills in programming 
          and did my curriculum projects, as well as, completed my academic projects.
          Besides my curriculum projects, I have done some projects on Java, Python and ReactJs to increase my skills and knowledge.
          All the projects that I have done are available in Github.
          <br/>
          <br/>
          I am a motivated and open minded person, trying to achieve my goals. Talking about my hobbies, I like to read, 
          listen music, and travel different places.
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
