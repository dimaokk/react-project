import React from 'react';
import dialogsCss from './Dialogs.module.css'
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import Massege from './Message/Massege';

const Dialogs = (props) => {

    let dialogElem = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id} />)
    let massegeElem = props.state.massegeData.map(m => <Massege massege={m.massege} />)

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogs__item}>
                {dialogElem}
            </div>
            <div className={dialogsCss.masseges}>
                {massegeElem}
            </div>
        </div>
    )
}

export default Dialogs