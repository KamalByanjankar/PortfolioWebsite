import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
// import {NavLink} from 'react-router-dom';
import { Link } from "react-scroll"
import BackDrop from '../Backdrop/Backdrop';
import "./Navbar.css"

const Navbar = (props) => {
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
    <div className="navbar">
      <nav className="navbar__navigation">
        <div className="hamburger__menu" onClick={handleClick}>
          {toggle ? <FaTimes size={20} style={{color: '#ffffff'}}/> : <FaBars size={20} style={{color:'#ffffff'}}/>}
        </div>
        {backDrop}
        <ul className={toggle ? "nav__menu active" : "nav__menu"}>
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
          {/* <li onClick={closeSidebar}><NavLink exact activeStyle={{color:'#fa923f'}} to="" onClick={props.clickEvent}> Home </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="about" onClick={props.clickEvent}> About </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="education" onClick={props.clickEvent}> Education </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="skills" onClick={props.clickEvent}> Skills </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="projects" onClick={props.clickEvent}> Projects </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="contact" onClick={props.clickEvent}> Contact </NavLink></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;