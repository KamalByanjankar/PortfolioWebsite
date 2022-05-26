import React from 'react';

import './Backdrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.clickHandler}/>
);

export default backdrop;