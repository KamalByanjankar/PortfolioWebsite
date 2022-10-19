import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com"

import "./Contact.css"


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });

    e.target.reset();
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
            <h4>Location:</h4>
            <p>Vilbeler Landstraße 236, 60388 Frankfurt am Main, Germany</p>
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
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="contact__label">
                Name <span className="required">*</span>
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
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
                id="email"
                name="email"
                placeholder="Your Email"
                className="contact__input"
              />
            </div>
            <div>
              <label htmlFor="subject" className="contact__label">
                Subject <span className="required">*</span>
              </label>
              <input 
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Message"
                className="contact__input"
              />
            </div>
            <div>
              <label htmlFor="message" className="contact__label">
                Message <span className="required">*</span>
              </label>
              <textarea 
                type="text"
                id="message"
                name="message"
                cols = "46"
                rows = "8"
                className="contact__input contact__textarea"
              />
            </div>
            <button 
              type="submit"
              className="contact__button"
            >
              Send Message
            </button>
            <div className="message">
              <div className="form__success">
                <p>Message has been sent.</p>
              </div>
              <div className="form__danger">
                <p>Fields can't be empty!</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 

export default Contact;
