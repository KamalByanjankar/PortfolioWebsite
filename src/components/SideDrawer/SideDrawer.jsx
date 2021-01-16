import React from "react";
import NavigationItem from "../Navbar/NavigationItem";
import './SideDrawer.css';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
      <nav className={drawerClasses} >
        <NavigationItem clickEvent={props.closeSidebar}/>
      </nav>
    );
}

export default SideDrawer;