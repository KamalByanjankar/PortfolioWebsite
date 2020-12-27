import React from "react";
import { NavLink } from "react-router-dom";

const Navitem = (props) => {
  return (
    <li id={props.item}>
      <NavLink
        exact
        activeStyle={{color:'#fa923f'}}
        to={props.tolink}
        onClick={props.clickEvents}
      >
        {props.item}
      </NavLink>
    </li>
  );
}

export default Navitem;