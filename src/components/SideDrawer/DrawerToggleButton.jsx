import React from 'react';
import "./DrawerToggleButton.css"

const DrawerToggleButton = props => (
    <button className="button-toggle" onClick={props.clickEvent}>
        <div className="button-toggle__line" />
        <div className="button-toggle__line" />
        <div className="button-toggle__line" />
    </button>
)

export default DrawerToggleButton;