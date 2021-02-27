import React from "react";
import "./Skills.css"

const Skills = () => {
  return (
    <div className="header">
      <h1>Skills</h1>
      <div className="skills__container">
        <ul className="skills__contents">
          <li className="java">
            Java<span className="skills__percent">60%</span>
          </li>
          <li className="python">
            Python<span className="skills__percent">60%</span>
          </li>
          <li className="react">
            ReactJs<span className="skills__percent">70%</span>
          </li>
          <li className="javascript">
            Javascript<span className="skills__percent">60%</span>
          </li>
          <li className="html">
            HTML<span className="skills__percent">70%</span>
          </li>
          <li className="css">
            CSS<span className="skills__percent">70%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
