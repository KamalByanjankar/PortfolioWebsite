import React, { Component } from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Navbar.css"
import NavigationItem from './NavigationItem';

class Navbar extends Component {
  state = {
    NavItemActive: "",
  }
  
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton clickEvent = {this.props.drawerClickHandler}/>
          </div>
          <div className="toolbar_navigation-items">
           <NavigationItem active={this.activeitem}/>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;