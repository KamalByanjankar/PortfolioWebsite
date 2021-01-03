import React, { Component } from "react";
import machineLearningIcon from "../assets/icons/machine-learning.svg";
import networkingIcon from "../assets/icons/local-area.svg";
import bankIcon from "../assets/icons/banking.svg";
import classificationIcon from "../assets/icons/classification.svg";
import estimationIcon from "../assets/icons/estimate.svg";
import websiteIcon from "../assets/icons/responsive.svg";
import calculatorIcon from "../assets/icons/calculator.svg";
import weatherIcon from "../assets/icons/weather.svg";
import "./Projects.css"

class Projects extends Component {
  constructor(props) {
    super();
    this.state = {
      projectId: "undefined",
      javaProjects: [
        {
          id: 1,
          icon: networkingIcon,
          title: "Protocol Emulator for IPv4",
          details:
            "A telecommunication protocol used to transfer messages from host to destination using shortest path",
          link: "https://github.com/KamalByanjankar/ProtocolEmulatorforIPv4",
        },
        {
          id: 2,
          icon: bankIcon,
          title: "Banking Application",
          details:
            "A Banking Application using Spring boot, Hibernate and Thymeleaf",
          link: "https://github.com/KamalByanjankar/BankApplication",
        },
      ],
      pythonProjects: [
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
        },
      ],

      javascriptProjects: [
        {
          id: 6,
          icon: websiteIcon,
          title: "Personal Website using HTML, CSS and Javascript",
          details:
            "Portfolio using HTML, CSS and Javascript",
          link: "https://github.com/KamalByanjankar/kamalbyanjankar.github.io",
        },
        {
          id: 7,
          icon: websiteIcon,
          title: "Personal Website using ReactJs",
          details:
            "Portfolio using ReactJs",
          link: "https://github.com/KamalByanjankar/Portfolio",
        },
        {
          id: 8,
          icon: calculatorIcon,
          title: "Simple Calculator",
          details:
            "A simple calculator used for addition, substraction, multiplication, division, and to calculate percentage",
          link: "https://github.com/KamalByanjankar/calculator",
        },
        {
          id: 9,
          icon: weatherIcon,
          title: "Weather App",
          details:
            "A weather App used to get the weather information of the city",
          link: "https://github.com/KamalByanjankar/weather-app",
        },
      ],
    };
  }

  toggle = (id) => {
    this.setState({
      projectId: id,
    });
  };

  render() {
    return (
      <div className="header">
        <h1>Projects</h1>
        <div className="btn-align">
          <label>
            <button
              onClick={() => this.toggle(1)}
              className={this.state.projectId === 1 ? "select" : ""}
            >
              Java
            </button>
          </label>
          <label>
            <button
              onClick={() => this.toggle(2)}
              className={this.state.projectId === 2 ? "select" : ""}
            >
              Python
            </button>
          </label>
          <label>
            <button
              onClick={() => this.toggle(3)}
              className={this.state.projectId === 3 ? "select" : ""}
            >
              ReactJs
            </button>
          </label>
        </div>

        <hr></hr>
        <div className="projects">
          {this.state.javaProjects.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  this.state.projectId === 1 ? "show-projects" : "none"
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
          }, this)}
        </div>

        <div className="projects">
          {this.state.pythonProjects.map((item, index) => {
            return (
              <li
                key={item.id}
                className={
                  this.state.projectId === 2 ? "show-projects" : "none"
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
          }, this)}
        </div>

        <div className="projects js-projects">
          {this.state.javascriptProjects.map((item, index) => {
            return (
              <li
                key={item.id}
                className={
                  this.state.projectId === 3 ? "show-projects" : "none"
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
          }, this)}
        </div>
      </div>
    );
  }
}

export default Projects;
