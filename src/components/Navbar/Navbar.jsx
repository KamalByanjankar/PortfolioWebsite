import React, { Component } from "react";
import Navitem from "./Navitem";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Navbar.css"

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
            <ul>
              <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
              <Navitem
                item="About"
                tolink="/about"
                activec={this.activeitem}
              ></Navitem>
              <Navitem
                item="Education"
                tolink="/education"
                activec={this.activeitem}
              ></Navitem>
              <Navitem
                item="Skills"
                tolink="/skills"
                activec={this.activeitem}
              ></Navitem>
              <Navitem
                item="Projects"
                tolink="/projects"
                activec={this.activeitem}
              ></Navitem>
              <Navitem
                item="Contact"
                tolink="/contact"
                activec={this.activeitem}
              ></Navitem>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;