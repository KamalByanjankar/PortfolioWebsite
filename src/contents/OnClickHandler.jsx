import React, { useState } from 'react';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import BackDrop from '../components/Backdrop/Backdrop';
import Navbar from '../components/Navbar/Navbar';


const ClickHandler = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const drawerToggleClickHandler = () => (
        setSideDrawerOpen(prevState => {
            return(!prevState.sideDrawerOpen)
            
        })
    )    

    const backDropClickHandler = () => (
        setSideDrawerOpen(false)
    );

    let backDrop;

    if(sideDrawerOpen){ 
        backDrop = <BackDrop clickHandler={backDropClickHandler}/>
    }


    return ( 
        <div>
            <Navbar drawerClickHandler = {drawerToggleClickHandler}/>
            <SideDrawer show={sideDrawerOpen} closeSidebar={drawerToggleClickHandler}/>  
            {backDrop}
        </div>
        
    );
}
 
export default ClickHandler;