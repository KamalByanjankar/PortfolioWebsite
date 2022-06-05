import React, {useState} from "react";
import {FaBars, FaTimes, FaHome, FaUser, FaUserGraduate, FaFile, FaAddressCard} from 'react-icons/fa';
import { Link } from "react-scroll"
import BackDrop from '../Backdrop/Backdrop';
import profilepic from "../../assets/profile/kamal.png";
import Social from "../Social/Social";
import "./Navbar.css"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  const closeSidebar = () => {
    setToggle(false)
  }

  const backDropClickHandler = () => (
    setToggle(false)
  );

  let backDrop;
  if(toggle){ 
      backDrop = <BackDrop clickHandler={backDropClickHandler}/>
  }

  return (
    <>
      <div className="hamburger__menu" onClick={handleClick}>
        {toggle ? <FaTimes size={20} style={{color: '#ffffff'}}/> : <FaBars size={20} style={{color:'#ffffff'}}/>}
      </div>
      {backDrop}
      <div className={toggle ? "navbar active" : "navbar hide"}>
        <div className="navbar__header">
          <a href="/"><img 
            src={profilepic}
            alt="My Profile Pic" 
            className="home__image" 
          /></a>
        </div>
        <h2>Kamal Byanjankar</h2>
        <nav className="navbar__navigation">
          <ul>
            <li>
              {/* <i className="navbar__navigation__icons">
                <FaHome />
              </i>      */}
              <Link activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeSidebar}>
                  <FaHome className="navbar__navigation__icons" />
                  Home 
              </Link>
            </li>

            <li>
              <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeSidebar}>
                  <FaUser className="navbar__navigation__icons" />
                  About
              </Link>
            </li>

            <li>
              <Link activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeSidebar}>
                  <FaUserGraduate className="navbar__navigation__icons" />
                  Education
              </Link>
            </li>

            <li>
              <Link activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeSidebar}>
                  <FaBars className="navbar__navigation__icons" />
                  Skills
              </Link>
            </li>

            <li>
              <Link activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeSidebar}>
                  <FaFile className="navbar__navigation__icons" />
                  Projects
              </Link>
            </li>

            <li>
              <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeSidebar}>
                  <FaAddressCard className="navbar__navigation__icons" />
                  Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Social />
      </div>
    </>
  );
}

export default Navbar;