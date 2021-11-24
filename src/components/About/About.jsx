import React from "react";
import file from "../../assets/files/Resume_Kamal_Byanjankar.pdf";
import "./About.css"

const About = () => {
  return(
    <div className="header">
      <h1>About me</h1>
      <p className="about__lineSpace">
        I am Kamal Byanjankar and I am a software Engineer. I am doing my
        Master's degree in Information Technology at Frankfurt University of
        Applied Sciences. I wrote my first programming code when I was studying my Bachelor. 
        After starting my Masters, I did my curriculum projects from which 
        I gradually improved my skills and completed my academic projects.
        Besides my curriculum projects, I have done projects on Java, Python and ReactJs.
        All the projects are available in Github.

        I am a motivated and open minded person, trying to acchieve my aim. I like to 
        listen music and travel different places.
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
