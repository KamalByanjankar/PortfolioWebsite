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
import authorizationIcon from '../../assets/icons/authorization.png';
import recognitionIcon from '../../assets/icons/recognition.png';
import "./Projects.css"


const javaProjects = [
  {
    id: 103,
    icon: authorizationIcon,
    title: "jwt authorization",
    details:
      "Spring Boot authentication and authorization using JWT, Spring security and Postgresql",
    link: "https://github.com/KamalByanjankar/jwt-authorization",
  },
  {
    id: 102,
    icon: bankIcon,
    title: "Banking Application",
    details:
      "A Banking Application using Spring boot, Hibernate and Thymeleaf",
    link: "https://github.com/KamalByanjankar/BankApplication",
  },
  {
    id: 101,
    icon: networkingIcon,
    title: "Protocol Emulator for IPv4",
    details:
      "A telecommunication protocol used to transfer messages from host to destination using shortest path",
    link: "https://github.com/KamalByanjankar/ProtocolEmulatorforIPv4",
  }
]

const pythonProjects = [
  {
    id: 204,
    icon: recognitionIcon,
    title: "Recognition of Small Stone Obstacles for Autonomous Driving",
    details: "Classify the stone obstacles using machine learning models and calulate the height of stones using Frequency spectrum and analysing the frequency changes when approaching towards the stone objects",
    link: "https://github.com/KamalByanjankar/RecognitionOfStoneObstacles",
  },
  {
    id: 203,
    icon: classificationIcon,
    title: "Classification Using Machine Learning Algorithms",
    details:
      "Extract the features from the dataset and classify the objects using Random Forest Classifier, KNN and CNN",
    link:
      "https://github.com/KamalByanjankar/ClassificationUsingMachineLearningAlgorithms",
  },
  {
    id: 202,
    icon: machineLearningIcon,
    title: "Minimizing Feature Vector using PCA",
    details:
      "Extract the features from the dataset and apply Machine Learning Algorithms to classify the objects and minimize feature vectors using PCA",
    link:
      "https://github.com/KamalByanjankar/MinimizeFeatureVectorUsingPCA",
  },
  {
    id: 201,
    icon: estimationIcon,
    title: "Parameter Estimation: Slope",
    details:
      "Estimating the slope of a straight line under noisy measurement condition by using Linear Regression with different dataset",
    link: "https://github.com/KamalByanjankar/ParameterEstimation",
  }
]

const javascriptProjects = [
  {
    id: 307,
    icon: bankIcon,
    title: "Online Banking Application",
    details: "An online banking application using Reactjs as a frontend and firebase to store user data. After registration, the user can transfer and view transactions as well as view details and update",
    link: "https://github.com/KamalByanjankar/bankApp",
  },
  {
    id: 306,
    icon: netflixIcon,
    title: "Netflix React Application",
    details: "An online movie streaming app uisng Reactjs to fetch movies from the TMDb movie database, firebase authentication to login and create an account as well as play trailer using youtube",
    link: "https://github.com/KamalByanjankar/netflix-clone",
  },
  {
    id: 305,
    icon: chatIcon,
    title: "Real-time Chat Application",
    details:
      "A messenger chat clone used to send and receive message in real time using Reactjs as frontend, firebase as a backend and firestore to save the messages",
    link: "https://github.com/KamalByanjankar/chat-clone",
  },
  {
    id: 304,
    icon: weatherIcon,
    title: "Weather App",
    details:
      "A weather App used to get the weather information of the city using Reactjs and fetches the weather data from openweathermap api",
    link: "https://github.com/KamalByanjankar/Weather-Application",
  },
  {
    id: 303,
    icon: calculatorIcon,
    title: "Simple Calculator",
    details:
      "A simple calculator used for addition, substraction, multiplication, division, and to calculate percentage using Reactjs",
    link: "https://github.com/KamalByanjankar/calculator",
  },
  {
    id: 302,
    icon: websiteIcon,
    title: "Personal Website using ReactJs",
    details:
      "Portfolio using ReactJs",
    link: "https://github.com/KamalByanjankar/Portfolio",
  },
  {
    id: 301,
    icon: websiteIcon,
    title: "Personal Website using HTML, CSS and Javascript",
    details:
      "Portfolio using HTML, CSS and Javascript",
    link: "https://github.com/KamalByanjankar/kamalbyanjankar.github.io",
  },
]

const Projects = () => {
  const [projectId, setProjectId] = useState(3)


  const toggle = (id) => (
    setProjectId(id)
  )

  return (
    <div className="header projects">
      <h1>Projects</h1>
      <div className="projects__button">
        <ul>
          <li onClick={() => toggle(3)}
            className={projectId === 3 ? "projects__select" : ""}>ReactJs</li>
          <li onClick={() => toggle(2)}
            className={projectId === 2 ? "projects__select" : ""}>Python</li>
          <li onClick={() => toggle(1)}
            className={projectId === 1 ? "projects__select" : ""}>Java</li>
        </ul>
      </div>
      
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
    </div>
  );
}

export default Projects;
