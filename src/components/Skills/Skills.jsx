import React from "react";
import "./Skills.css"

const Skills = () => {
  return (
    <div className="header">
      <h1>Skills</h1>
      <div className="container">
        <ul className="skills">
          <li className="java">
            Java<span className="percent">60%</span>
          </li>
          <li className="python">
            Python<span className="percent">60%</span>
          </li>
          <li className="react">
            ReactJs<span className="percent">70%</span>
          </li>
          <li className="javascript">
            Javascript<span className="percent">60%</span>
          </li>
          <li className="html">
            HTML<span className="percent">70%</span>
          </li>
          <li className="css">
            CSS<span className="percent">70%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
