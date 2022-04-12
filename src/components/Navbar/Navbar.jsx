import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
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
          <li onClick={closeSidebar}><NavLink exact activeStyle={{color:'#fa923f'}} to="" onClick={props.clickEvent}> Home </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="about" onClick={props.clickEvent}> About </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="education" onClick={props.clickEvent}> Education </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="skills" onClick={props.clickEvent}> Skills </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="projects" onClick={props.clickEvent}> Projects </NavLink></li>
          <li onClick={closeSidebar}><NavLink activeStyle={{color:'#fa923f'}} to="contact" onClick={props.clickEvent}> Contact </NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;