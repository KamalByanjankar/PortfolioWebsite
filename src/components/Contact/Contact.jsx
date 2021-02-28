import React, { useState } from "react";
import Social from "../Social/Social";
import "./Contact.css"

const contact = [
  {
    title: "Vilbeler Landstraße 236",
    subtitle: "60388 Frankfurt am Main",
    country: "Germany",
    link:
      "https://www.google.com/maps/place/Vilbeler+Landstra%C3%9Fe+236,+60388+Frankfurt+am+Main/@50.1559662,8.7453167,517m/data=!3m1!1e3!4m5!3m4!1s0x47bd0fa4dbe6528b:0x30e4504747adcc45!8m2!3d50.1560943!4d8.746844",
  },
  {
    title: "Gmail",
    subtitle: "",
    country: "",
    link: "mailto:kamalbyanjankar@gmail.com",
  },
]

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
    <div className="header">
      <h1>Contact</h1>
      <div className="contact__wrapper">

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
                autoFocus
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

        <div className="contact__info">
          {contact.map((item) => {
            return (
              <li key={item.title}>
                <a
                  className="contact__link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact__details">
                    <p className="">{item.title}</p>
                    <p className="contact__details">{item.subtitle}</p>
                    <p className="contact__details">{item.country}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </div>
      </div>
      <Social />
    </div>
  );
} 

export default Contact;
