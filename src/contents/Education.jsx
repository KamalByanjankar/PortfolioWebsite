import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import unilogo from "../assets/images/frauni.jpg";
import keclogo from "../assets/images/kec.jpg";
import hseblogo from "../assets/images/hseb.png";
import schoollogo from "../assets/images/mav.jpg";
import "./Education.css"

class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 1,
      left: 0,
      userData: [
        {
          image: unilogo,
          title: "Master in Engineering in Information Technology",
          duration: "October 2017 - Present",
          university: "Frankfurt University of Applied Sciences",
          address: "Nibelungenplatz 1",
          city: "60318 Frankfurt am Main",
          country: "Germany",
        },
        {
          image: keclogo,
          title:
            "Bachelor in Engineering in Electronics and Communication Engineering",
          duration: "August 2010 - November 2014",
          university: "Kantipur Engineering College",
          address: "Dhapakhel",
          city: "Lalitpur 44700",
          country: "Nepal",
        },
        {
          image: hseblogo,
          title: "General Science",
          duration: "August 2007 - July 2009",
          university: "Caspian Valley Higher Secondary School",
          address: "Kumaripati",
          city: "Lalitpur 44700",
          country: "Nepal",
        },
        {
          image: schoollogo,
          title: "Secondary School",
          duration: "January 1994 - June 2007",
          university: "Mahendra Adarsha Vidyashram Higher Secondary School",
          address: "Godawari Sadak",
          city: "Satdobato, Lalitpur 44700",
          country: "Nepal",
        },
      ],
    };
  }

  prevSlide = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + this.props.userDataWidth,
    });
    if (this.state.activeIndex === 1) {
      this.setState({
        activeIndex: this.state.activeIndex + this.state.userData.length - 1,
        left:
          this.state.left -
          this.props.userDataWidth * (this.state.userData.length - 1),
      });
    }
  };

  nextSlide = () => {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.props.userDataWidth,
    });
    if (this.state.activeIndex === this.state.userData.length) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.userData.length + 1,
        left: 0,
      });
    }
  };

  clickIndicator = (e) => {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left:
        this.props.userDataWidth -
        parseInt(e.target.textContent) * this.props.userDataWidth,
    });
  };

  render() {
    return (
      <div className="header">
        <h1>Education</h1>
        <div className="slider-parent">
          <ul className="slider-child">
            {this.state.userData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    index + 1 === this.state.activeIndex
                      ? "education-wrapper"
                      : "hide"
                  }
                >
                  <p>
                    <img
                      src={item.image}
                      alt="University logo"
                      className="logo"
                    ></img>
                    <br></br>
                    {item.title}
                    <br></br>
                    {item.duration}
                  </p>
                  <p className="details color">
                    {item.university}
                    <br></br>
                    {item.address}
                    <br></br>
                    {item.city}
                    <br></br>
                    {item.country}
                  </p>
                </li>
              );
            }, this)}
          </ul>
        </div>

        <div className="buttons-wrapper">
          <FaArrowLeft
            className="next-button"
            onClick={this.prevSlide}
          ></FaArrowLeft>
          <FaArrowRight
            className="prev-button"
            onClick={this.nextSlide}
          ></FaArrowRight>
        </div>

        <div className="indicators-wrapper">
          <ul className="indicators">
            {this.state.userData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    index + 1 === this.state.activeIndex
                      ? "active-indicator"
                      : ""
                  }
                  onClick={this.clickIndicator}
                >
                  {index + 1}
                </li>
              );
            }, this)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Education;
