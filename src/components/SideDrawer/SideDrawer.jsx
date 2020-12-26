import React, { Component } from "react";
import './SideDrawer.css';
import Navitem from "../Navbar/Navitem";

class SideDrawer extends Component {
  constructor(props) {
    super();
    this.state = {
      NavItemActive: "",
      sideBarIsOpen: false
    };
  }     

  activeitem = () => {
    this.setState({
      sideBarIsOpen: !this.state.sideBarIsOpen
    })
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

  render(){
    let drawerClasses = 'side-drawer';
    if(this.props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
      <nav className={drawerClasses} >
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
      </nav>
    );
  }
    
}

export default SideDrawer;