import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Navbar.css"
import NavigationItem from './NavigationItem';

const Navbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton clickEvent = {props.drawerClickHandler}/>
        </div>
        <div className="toolbar_navigation-items" >
          <NavigationItem />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;