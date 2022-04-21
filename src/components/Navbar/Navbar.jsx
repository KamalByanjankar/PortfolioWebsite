import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from "react-scroll"
// import BackDrop from '../Backdrop/Backdrop';
import profilepic from "../../assets/profile/kamal.png";
import Social from "../Social/Social";
import "./Navbar.css"

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  const closeSidebar = () => {
    setToggle(false)
  }

  // const backDropClickHandler = () => (
  //   setToggle(false)
  // );

  // let backDrop;
  // if(toggle){ 
  //     backDrop = <BackDrop clickHandler={backDropClickHandler}/>
  // }

  return (
    <>
      <div className="hamburger__menu" onClick={handleClick}>
        {toggle ? <FaTimes size={20} style={{color: '#ffffff'}}/> : <FaBars size={20} style={{color:'#ffffff'}}/>}
      </div>
      <div className={toggle ? "navbar active" : "navbar hide"}>
        {/* {backDrop} */}
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
              <Link activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeSidebar}>
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