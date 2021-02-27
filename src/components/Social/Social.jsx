import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXing,
} from "react-icons/fa";

import './Social.css'

const Social = () => {
  return (
    <div className="social">
      <a
        href="https://github.com/kamalbyanjankar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/kamalbyanjankar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/byanjankar_kamal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/kamal-byanjankar-95a692aa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.xing.com/home"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXing />
      </a>
    </div>
  );
}

export default Social;
