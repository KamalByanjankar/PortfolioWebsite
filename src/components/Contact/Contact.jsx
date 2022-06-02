import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

import "./Contact.css"


const contactEmail = "kamalbyanjankar@gmail.com"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const submitForm = (e) => {
    e.preventDefault()
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );

    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  };

  return (
    <div className="header contact">
      <h1>Contact</h1>
      <div className="contact__wrapper">
        <div className="contact__details">
          <div className="contact__details__address">
            <i className="contact__details__address__icon">
              <FontAwesomeIcon icon={faHome} />
            </i>
            <div className="test">
              <h4>Location:</h4>
              <p>Vilbeler Landstraße 236, 60388 Frankfurt am Main, Germany</p>
            </div>
          </div>

          <div className="contact__details__email"> 
          <i className="contact__details__email__icon">
          <FontAwesomeIcon icon={faEnvelope} />
          </i>
            <h4>Email:</h4>
            <p>kamalbyanjankar@gmail.com</p>
          </div>

          <div className="contact__details__phone">
            <i className="contact__details__phone__icon">
            <FontAwesomeIcon icon={faMobile} />
            </i>
            <h4>Phone:</h4>
            <p>+49 17675893645</p>
          </div>
        </div>

        <div className="contact__form">
          <form onSubmit={submitForm}>
            <div>
              <label htmlFor="name" className="contact__label">
                Name <span className="required">*</span>
              </label>
              <input 
                type="text"
                value={name}
                id="name"
                name="name"
                // autoFocus
                onChange={(e) => setName(e.target.value)}
                className="contact__input"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="contact__label">
                Email <span className="required">*</span>
              </label>
              <input 
                type="email"
                value={email}
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="contact__input"
              />
            </div>
            <div>
              <label htmlFor="subject" className="contact__label">
                Subject <span className="required">*</span>
              </label>
              <input 
                type="text"
                value={subject}
                id="subject"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                className="contact__input"
              />
            </div>
            <div>
              <label htmlFor="message" className="contact__label">
                Message <span className="required">*</span>
              </label>
              <textarea 
                type="text"
                value={message}
                id="message"
                name="message"
                cols = "46"
                rows = "8"
                onChange={(e) => setMessage(e.target.value)}
                className="contact__input contact__textarea"
              />
            </div>
            <button 
              type="submit" 
              onClick={submitForm}
              className="contact__button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 

export default Contact;
