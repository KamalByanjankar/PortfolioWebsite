import React, { Component } from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Navbar.css"
import NavigationItem from './NavigationItem';

class Navbar extends Component {
  state = {
    bgColor: ''
  }
  
  activeitem = (e) => {
    // console.log(e ,'clicked')
  };

  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton clickEvent = {this.props.drawerClickHandler}/>
          </div>
          <div className="toolbar_navigation-items" style={{color: this.state.bgColor}}>
           <NavigationItem active={this.activeitem} />
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;