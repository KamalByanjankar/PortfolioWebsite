import React, { useState } from "react";
import machineLearningIcon from "../assets/icons/machine-learning.svg";
import networkingIcon from "../assets/icons/local-area.svg";
import bankIcon from "../assets/icons/banking.svg";
import classificationIcon from "../assets/icons/classification.svg";
import estimationIcon from "../assets/icons/estimate.svg";
import websiteIcon from "../assets/icons/responsive.svg";
import calculatorIcon from "../assets/icons/calculator.svg";
import weatherIcon from "../assets/icons/weather.svg";
import "./Projects.css"


const Projects = () => {
  const [projectId, setProjectId] = useState('')
  const [javaProjects] = useState([
    {
      id: 1,
      icon: bankIcon,

      title: "Banking Application",
      details:
        "A Banking Application using Spring boot, Hibernate and Thymeleaf",
      link: "https://github.com/KamalByanjankar/BankApplication",
    },
    {
      id: 2,
      icon: networkingIcon,
      title: "Protocol Emulator for IPv4",
      details:
        "A telecommunication protocol used to transfer messages from host to destination using shortest path",
      link: "https://github.com/KamalByanjankar/ProtocolEmulatorforIPv4",
    }
  ])

  const [pythonProjects] = useState([
    {
      id: 3,
      icon: classificationIcon,
      title: "Classification Using Machine Learning Algorithms",
      details:
        "Extract the features from the dataset and classify the objects using Random Forest Classifier, KNN and CNN",
      link:
        "https://github.com/KamalByanjankar/ClassificationUsingMachineLearningAlgorithms",
    },
    {
      id: 4,
      icon: machineLearningIcon,
      title: "Minimizing Feature Vector using PCA",
      details:
        "Extract the features from the dataset and apply Machine Learning Algorithms to classify the objects and minimize feature vectors using PCA",
      link:
        "https://github.com/KamalByanjankar/MinimizeFeatureVectorUsingPCA",
    },
    {
      id: 5,
      icon: estimationIcon,
      title: "Parameter Estimation: Slope",
      details:
        "Estimating the slope of a straight line under noisy measurement condition by using Linear Regression with different dataset",
      link: "https://github.com/KamalByanjankar/ParameterEstimation",
    }
  ])
  
  const [javascriptProjects] = useState([
    {
      id: 6,
      icon: weatherIcon,
      title: "Weather App",
      details:
        "A weather App used to get the weather information of the city",
      link: "https://github.com/KamalByanjankar/weather-app",
    },
    {
      id: 7,
      icon: calculatorIcon,
      title: "Simple Calculator",
      details:
        "A simple calculator used for addition, substraction, multiplication, division, and to calculate percentage",
      link: "https://github.com/KamalByanjankar/calculator",
    },
    {
      id: 8,
      icon: websiteIcon,
      title: "Personal Website using ReactJs",
      details:
        "Portfolio using ReactJs",
      link: "https://github.com/KamalByanjankar/Portfolio",
    },
    {
      id: 9,
      icon: websiteIcon,
      title: "Personal Website using HTML, CSS and Javascript",
      details:
        "Portfolio using HTML, CSS and Javascript",
      link: "https://github.com/KamalByanjankar/kamalbyanjankar.github.io",
    },
  ])
    

  const toggle = (id) => (
    setProjectId(id)
  )

  return (
    <div className="header">
      <h1>Projects</h1>
      <div className="btn-align">
        <label>
          <button
            onClick={() => toggle(3)}
            className={projectId === 3 ? "select" : ""}
          >
            ReactJs
          </button>
        </label>
        <label>
          <button
            onClick={() => toggle(2)}
            className={projectId === 2 ? "select" : ""}
          >
            Python
          </button>
        </label>
        <label>
          <button
            onClick={() => toggle(1)}
            className={projectId === 1 ? "select" : ""}
          >
            Java
          </button>
        </label>
      </div>

      <hr></hr>
      <div className="projects">
        {javascriptProjects.map((item, index) => {
          return (
            <li
              key={item.id}
              className={
                projectId === 3 ? "show-projects" : "none"
              }
            >
              <img src={item.icon} alt="Project Logo"></img>
              <h4>{item.title}</h4>
              <p className="color size">{item.details}</p>
              <a
                className="link color"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Github
              </a>
            </li>
          );
        })}
      </div>

      <div className="projects">
        {pythonProjects.map((item, index) => {
          return (
            <li
              key={item.id}
              className={
                projectId === 2 ? "show-projects" : "none"
              }
            >
              <img src={item.icon} alt="Project logo"></img>
              <h4>{item.title}</h4>
              <p className="color size">{item.details}</p>
              <a
                className="link color"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Github
              </a>
            </li>
          );
        })}
      </div>

      <div className="projects js-projects">
        {javaProjects.map((item, index) => {
          return (
            <li
              key={item.id}
              className={
                projectId === 1 ? "show-projects" : "none"
              }
            >
              <img src={item.icon} alt="Project logo"></img>
              <h4>{item.title}</h4>
              <p className="color size">{item.details}</p>
              <a
                className="link color"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Github
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
