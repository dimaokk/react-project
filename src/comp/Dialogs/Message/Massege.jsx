import React from 'react';
import dialogsCss from './../Dialogs.module.css'
// import { NavLink } from 'react-router-dom';

const Massege =(props) => {
    return (
        <div className={dialogsCss.massege}>{props.massege}</div>
    )
}


export default Massege