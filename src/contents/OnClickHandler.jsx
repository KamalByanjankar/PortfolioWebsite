import React, { Component } from 'react';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import BackDrop from '../components/Backdrop/Backdrop';
import Navbar from '../components/Navbar/Navbar';

class ClickHandler extends Component {
    state = {  
        sideDrawerOpen: false,
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backDropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() { 
        let backDrop;


        if(this.state.sideDrawerOpen){ 
            backDrop = <BackDrop clickHandler={this.backDropClickHandler}/>
        }

        return ( 
            <div>
                <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} closeSidebar={this.drawerToggleClickHandler}/>  
                {backDrop}
            </div>
            
         );
    }
}
 
export default ClickHandler;