import React from 'react';
import {NavLink} from 'react-router-dom'

const NavigationItem = (props) => {
    return(
        <ul className="navigationItem_ul">
            <li><NavLink exact activeStyle={{color:'#fa923f'}} to="" onClick={props.clickEvent}> Home </NavLink></li>
            <li><NavLink activeStyle={{color:'#fa923f'}} to="about" onClick={props.clickEvent}> About </NavLink></li>
            <li><NavLink activeStyle={{color:'#fa923f'}} to="education" onClick={props.clickEvent}> Education </NavLink></li>
            <li><NavLink activeStyle={{color:'#fa923f'}} to="skills" onClick={props.clickEvent}> Skills </NavLink></li>
            <li><NavLink activeStyle={{color:'#fa923f'}} to="projects" onClick={props.clickEvent}> Projects </NavLink></li>
            <li><NavLink activeStyle={{color:'#fa923f'}} to="contact" onClick={props.clickEvent}> Contact </NavLink></li>
        </ul>     
    )
}

export default NavigationItem;