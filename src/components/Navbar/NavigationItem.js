import React from 'react';
import Navitem from './Navitem';

const navigationItem = (props) => {
    return(
        <ul>
            <Navitem 
                clickEvents={props.clickEvent} 
                item="Home" tolink="/" 
            ></Navitem>
            <Navitem
                clickEvents={props.clickEvent}
                item="About"
                tolink="/about"
            ></Navitem>
            <Navitem
                clickEvents={props.clickEvent}
                item="Education"
                tolink="/education"
            ></Navitem>
            <Navitem
                clickEvents={props.clickEvent}
                item="Skills"
                tolink="/skills"
            ></Navitem>
            <Navitem
                clickEvents={props.clickEvent}
                item="Projects"
                tolink="/projects"
            ></Navitem>
            <Navitem
                clickEvents={props.clickEvent}
                item="Contact"
                tolink="/contact"
            ></Navitem>
        </ul>
                
    )
}

export default navigationItem;