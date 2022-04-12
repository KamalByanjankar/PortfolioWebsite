import React from "react";
import Navbar from "../Navbar/Navbar";
import './SideDrawer.css';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
      <nav className={drawerClasses} >
        <Navbar clickEvent = {props.closeSidebar} />
      </nav>
    );
}

export default SideDrawer;