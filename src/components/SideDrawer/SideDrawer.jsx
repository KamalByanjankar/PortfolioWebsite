import React, { Component } from "react";
import './SideDrawer.css';
import NavigationItem from '../Navbar/NavigationItem';

class SideDrawer extends Component {
    state = {
      NavItemActive: "",
      sideBarIsOpen: false
    };    

  activeitem = () => {
    this.setState((prevState) => {
      return{
        sideBarIsOpen: !prevState.sideBarIsOpen
      }
    })
  }

  render(){
    let drawerClasses = 'side-drawer';
    if(this.props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
      <nav className={drawerClasses} >
        <NavigationItem active={this.activeitem}/>
      </nav>
    );
  }
    
}

export default SideDrawer;