import React, { useState } from "react";
import machineLearningIcon from "../../assets/icons/machine-learning.svg";
import networkingIcon from "../../assets/icons/local-area.svg";
import bankIcon from "../../assets/icons/banking.svg";
import classificationIcon from "../../assets/icons/classification.svg";
import estimationIcon from "../../assets/icons/estimate.svg";
import websiteIcon from "../../assets/icons/responsive.svg";
import calculatorIcon from "../../assets/icons/calculator.svg";
import weatherIcon from "../../assets/icons/weather.svg";
import chatIcon from "../../assets/icons/chatIcon.svg";
import netflixIcon from '../../assets/icons/netflix.png';
import "./Projects.css"


const javaProjects = [
  {
    id: 12,
    icon: 1,

    title: "jwt authorization",
    details:
      "Spring Boot authentication and authorization using JWT, Spring security and Postgresql",
    link: "https://github.com/KamalByanjankar/jwt-authorization",
  },
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
]

const pythonProjects = [
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
]

const javascriptProjects = [
  {
    id: 11,
    icon: netflixIcon,
    title: "Netflix clone",
    details: "An online movie streaming app uisng Reactjs to fetch movies from the TMDb movie database, firebase authentication to login and create an account as well as play trailer using youtube",
    link: "https://github.com/KamalByanjankar/netflix-clone",
  },
  {
    id: 10,
    icon: chatIcon,
    title: "Chat clone",
    details:
      "A messenger chat clone used to send and receive message in real time using Reactjs as frontend, firebase as a backend and firestore to save the messages",
    link: "https://github.com/KamalByanjankar/chat-clone",
  },
  {
    id: 6,
    icon: weatherIcon,
    title: "Weather App",
    details:
      "A weather App used to get the weather information of the city using Reactjs and fetch the weather data from openweathermap api",
    link: "https://github.com/KamalByanjankar/weather-app",
  },
  {
    id: 7,
    icon: calculatorIcon,
    title: "Simple Calculator",
    details:
      "A simple calculator used for addition, substraction, multiplication, division, and to calculate percentage using Reactjs",
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
]

const Projects = () => {
  const [projectId, setProjectId] = useState('')


  const toggle = (id) => (
    setProjectId(id)
  )

  return (
    <div className="header">
      <h1>Projects</h1>
      <div className="projects__button">
        <label>
          <button
            onClick={() => toggle(3)}
            className={projectId === 3 ? "projects__select" : ""}
          >
            ReactJs
          </button>
        </label>
        <label>
          <button
            onClick={() => toggle(2)}
            className={projectId === 2 ? "projects__select" : ""}
          >
            Python
          </button>
        </label>
        <label>
          <button
            onClick={() => toggle(1)}
            className={projectId === 1 ? "projects__select" : ""}
          >
            Java
          </button>
        </label>
      </div>

      <hr />
      <div className="projects__container">
        {javascriptProjects.map((item) => {
          return (
            <li
              key={item.id}
              className={
                projectId === 3 ? "projects__show" : "projects__none"
              }
            >
              <img
                src={item.icon}
                alt="Project Logo"
                className="projects__logo"
              />
              <h4 className="projects__title">{item.title}</h4>
              <p className="projects__overview">{item.details}</p>
              <a
                className="projects__link"
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

      <div className="projects__container">
        {pythonProjects.map((item) => {
          return (
            <li
              key={item.id}
              className={
                projectId === 2 ? "projects__show" : "projects__none"
              }
            >
              <img
                src={item.icon}
                alt="Project logo"
                className="projects__logo"
              />
              <h4>{item.title}</h4>
              <p className="projects__overview">{item.details}</p>
              <a
                className="projects__link"
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

      <div className="projects__container">
        {javaProjects.map((item) => {
          return (
            <li
              key={item.id}
              className={
                projectId === 1 ? "projects__show" : "projects__none"
              }
            >
              <img
                src={item.icon}
                alt="Project logo"
                className="projects__logo"
              />
              <h4>{item.title}</h4>
              <p className="projects__overview">{item.details}</p>
              <a
                className="projects__link"
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
