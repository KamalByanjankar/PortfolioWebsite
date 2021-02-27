import React from "react";
import Social from "../Social/Social";
import locationIcon from "../../assets/icons/address.svg";
import mailIcon from "../../assets/icons/gmail.svg";
import "./Contact.css"

const contact = [
  {
    icon: locationIcon,
    title: "Vilbeler Landstraße 236",
    subtitle: "60388 Frankfurt am Main",
    country: "Germany",
    link:
      "https://www.google.com/maps/place/Vilbeler+Landstra%C3%9Fe+236,+60388+Frankfurt+am+Main/@50.1559662,8.7453167,517m/data=!3m1!1e3!4m5!3m4!1s0x47bd0fa4dbe6528b:0x30e4504747adcc45!8m2!3d50.1560943!4d8.746844",
  },
  {
    icon: mailIcon,
    title: "Gmail",
    subtitle: "",
    country: "",
    link: "mailto:kamalbyanjankar@gmail.com",
  },
]

const Contact = (props) => {

  return (
    <div className="header">
      <h1>Contact</h1>
      <div className="contact-wrapper">
        {contact.map((item, index) => {
          return (
            <li key={item.title}>
              <a
                className="contact-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.icon} alt="Contact logo"></img>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
                <p>{item.country}</p>
              </a>
            </li>
          );
        })}
      </div>
      <Social></Social>
    </div>
  );
} 

export default Contact;
