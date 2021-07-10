import React from 'react';
import dialogsCss from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={dialogsCss.dialog }>
           <NavLink to={path} className={dialogsCss.dialogItem} activeClassName={dialogsCss.active}>  <img className={dialogsCss.img} src="https://academic-fitness.ru/wp-content/uploads/2017/09/user.png" alt="" /> <p>{props.name}</p>  </NavLink>
        </div>
    )
}


export default DialogItem