import React, { Component } from "react";
import './SideDrawer.css';
import NavigationItem from '../Navbar/NavigationItem';

class SideDrawer extends Component {
  render(){
    let drawerClasses = 'side-drawer';
    if(this.props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
      <nav className={drawerClasses} >
        <NavigationItem clickEvent={this.props.closeSidebar}/>
      </nav>
    );
  }
    
}

export default SideDrawer;