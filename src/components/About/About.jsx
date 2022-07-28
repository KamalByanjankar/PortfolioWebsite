import React from "react";
import file from "../../assets/files/Resume_Kamal_Byanjankar.pdf";
import "./About.css"

const About = () => {
  return(
    <div className="header about">
      <h1>About</h1>
      <p className="about__lineSpace">
        I have completed my 
        Master's degree in Information Technology from Frankfurt University of
        Applied Sciences. I did my Bachelor's in Electronics and Communication Engineering 
        from Kantipur Engineering College in Nepal. During my Mastee studies, I did my curriculum projects and 
        improved my knowledge and skills, and completed my academic projects.
        Besides my curriculum projects, I have done some projects on Java, Python and ReactJs to increase my skills and knowledge.
        All the projects that I have done are available in Github.
        <br/>
        <br/>
        I am a motivated and open minded person, trying to achieve my goals. I like to read, 
        listen music, and travel different places.
      </p>
      <div className="about__resume__download">
        <a href={file} download="Resume_Kamal_Byanjankar">
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default About;
