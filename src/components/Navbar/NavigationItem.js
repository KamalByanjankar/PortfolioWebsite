import React from 'react';
import Navitem from './Navitem';

const navigationItem = (props) => {
    return(
            <ul>
            <Navitem item="Home" tolink="/" ></Navitem>
            <Navitem
                item="About"
                tolink="/about"
                // activec={props.active}
            ></Navitem>
            <Navitem
                item="Education"
                tolink="/education"
                // activec={props.active}
            ></Navitem>
            <Navitem
                item="Skills"
                tolink="/skills"
                // activec={props.active}
            ></Navitem>
            <Navitem
                item="Projects"
                tolink="/projects"
                // activec={props.active}
            ></Navitem>
            <Navitem
                item="Contact"
                tolink="/contact"
                // activec={props.active}
            ></Navitem>
            </ul>
                
    )
}

export default navigationItem;