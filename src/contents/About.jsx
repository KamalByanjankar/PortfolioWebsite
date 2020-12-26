import React from "react";
import file from "../assets/files/Resume_Kamal_Byanjankar.pdf";
import "./About.css"

const About = () => {
  return(
    <div className="header">
      <h1>About me</h1>
      <p className="color line-space">
        I am Kamal Byanjankar and I am a software Engineer. I am pursuing my
        Master's degree in Information Technology at Frankfurt University of
        Applied Sciences. I wrote my first programming code during my Bachelor. 
        Then I gradually improved my skills and completed my academic projects.
        Besides my curriculum projects, I have done projects on Java, Python and ReactJs.
        All the projects are available in Github.
      </p>
      <div className="download">
        <a href={file} download="Resume_Kamal_Byanjankar">
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default About;
