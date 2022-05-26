import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Education.css"
import educationData from "../../assets/data.json";

const userData = educationData.education

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
    <div className="header education">
      <h1>Education</h1>
      <div className="education__indicator__wrapper">
        <div className="education__button__wrapper">
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
                        alt="logo"
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
      <div className="background"></div>
    </div>
  );
}

export default Education;
