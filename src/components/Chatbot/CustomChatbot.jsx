import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true,
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please type your name?",
      trigger: "Waiting user name",
    },
    {
      id: "Waiting user name",
      user: true,
      trigger: "Ask Help",
    },
    {
      id: "Ask Help",
      message: "Hi {previousValue}, Welcome to my website ",
      trigger: "Set options",
    },
    {
      id: "Set options",
      message: "Please, click on which information you want to know!",
      trigger: "Display informations",
    },
    {
      id: "Display informations",
      options: [
        {
          value: "About",
          label: "About",
          trigger: "about me",
        },
        {
          value: "Education",
          label: "Education",
          trigger: "education",
        },
        {
          value: "Skills",
          label: "Skills",
          trigger: "skill",
        },
        {
          value: "Projects",
          label: "Projects",
          trigger: "projects",
        },
        {
          value: "exit",
          label: "EXIT",
          trigger: "done",
        },
      ],
    },
    {
      id: "about me",
      message:
        "I am Kamal Byanjankar. I am a student of Master of Engineering in Information Technology at Frankfurt University of Applied Sciences.",
      trigger: "Set options",
    },
    {
      id: "education",
      message: "Master of Engineering in Information Technology",
      trigger: "education2",
    },
    {
      id: "education2",
      message:
        "Bachelor in Engineering in Electronics and Communication Engineering",
      trigger: "Set options",
    },
    {
      id: "skill",
      message: "Java, Python, ReactJs, Javascript, HTML, CSS",
      trigger: "Set options",
    },

    {
      id: "projects",
      message: "Please choose the platform",
      trigger: "platform",
    },
    {
      id: "platform",
      options: [
        {
          value: "Java",
          label: "Java",
          trigger: "java projects",
        },
        {
          value: "Python",
          label: "Python",
          trigger: "python projects",
        },
        {
          value: "React/ Javascript",
          label: "React/ Javascript",
          trigger: "website",
        },
        {
          value: "EXIT",
          label: "Go Back",
          trigger: "Set options",
        },
      ],
    },
    {
      id: "java projects",
      component: (
        <div>
          Online Banking Application{" "}
          <a
            href="https://github.com/KamalByanjankar/BankApplication"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Github
          </a>
        </div>
      ),
      asMessage: true,
      trigger: "java project 2",
    },
    {
      id: "java project 2",
      component: (
        <div>
          Protocol Emulator for IPv4{" "}
          <a
            href="https://github.com/KamalByanjankar/ProtocolEmulatorforIPv4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Github
          </a>
        </div>
      ),
      asMessage: true,
      trigger: "projects",
    },
    {
      id: "python projects",
      component: (
        <div>
          Classification Using Machine Learning Algorithms{" "}
          <a
            href="https://github.com/KamalByanjankar/ClassificationUsingMachineLearningAlgorithms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Github
          </a>
        </div>
      ),
      asMessage: true,
      trigger: "python project 2",
    },
    {
      id: "python project 2",
      component: (
        <div>
          Minimizing Feature Vector using PCA{" "}
          <a
            href="https://github.com/KamalByanjankar/MinimizeFeatureVectorUsingPCA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Github
          </a>
        </div>
      ),
      asMessage: true,
      trigger: "projects",
    },
    {
      id: "website",
      component: (
        <div>
          Personal Website using HTML, CSS and Javascript{" "}
          <a
            href="https://github.com/KamalByanjankar/kamalbyanjankar.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Github
          </a>
        </div>
      ),
      asMessage: true,
      trigger: "website 2",
    },
    {
      id: "website 2",
      component: (
        <div>
          Personal Website using ReactJs{" "}
          <a
            href="https://github.com/KamalByanjankar/PortfolioWebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Github
          </a>
        </div>
      ),
      asMessage: true,
      trigger: "react project 3",
    },
    {
      id: "react project 3",
      component: (
        <div>
          Calculator{" "}
          <a
            href="https://github.com/KamalByanjankar/calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Github
          </a>
        </div>
      ),
      asMessage: true,
      trigger: "projects",
    },
    {
      id: "done",
      message: "Thank you. Have a nice day!!",
      end: true,
    },
  ];

  return <ChatBot  steps={steps} {...config} />;
}

export default CustomChatbot;
