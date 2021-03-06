import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import unilogo from "../../assets/images/frauni.jpg";
import keclogo from "../../assets/images/kec.jpg";
import hseblogo from "../../assets/images/hseb.png";
import schoollogo from "../../assets/images/mav.jpg";
import "./Education.css"

const userData = [
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
]

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [left, setLeft] = useState(0)


  const prevSlide = () => ( 
    (activeIndex === 1) ? (setActiveIndex(activeIndex + userData.length - 1), 
    setLeft(left - userData.length * (userData.length - 1))) : 
    (setActiveIndex(activeIndex - 1), 
    setLeft(left + userData.length))
        
  )


  const nextSlide = () => (
    (activeIndex === userData.length) ?
    (setActiveIndex(activeIndex - userData.length + 1), setLeft(0)) : 
    (setActiveIndex(activeIndex + 1), setLeft(left - userData.length))
  )


  const clickIndicator = (e) => (
    (setActiveIndex(parseInt(e.target.textContent)),
    setLeft(userData.length - parseInt(e.target.textContent) * userData.length))
  )
      

  return (  
    <div className="header">
      <h1>Education</h1>
      <div className="slider__parent">
        <ul className="slider__child">
          {userData.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  index + 1 === activeIndex
                    ? "education__wrapper"
                    : "education__hide"
                }
              >
                <p>
                  <img
                    src={item.image}
                    alt="University logo"
                    className="education__logo"
                  ></img>
                  <br></br>
                  {item.title}
                  <br></br>
                  {item.duration}
                </p>
                <p className="education__details">
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

      <div className="buttons__wrapper">
        <FaArrowLeft
          className="next__button"
          onClick={prevSlide}
        ></FaArrowLeft>
        <FaArrowRight
          className="prev__button"
          onClick={nextSlide}
        ></FaArrowRight>
      </div>

      <div className="education__indicators">
        <ul className="education__indicator">
          {userData.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  index + 1 === activeIndex
                    ? "education__activeIndicator"
                    : ""
                }
                onClick={clickIndicator}
              >
                {index + 1}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Education;
