import React from "react";
import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink
                to={path}
                className={styles.dialogItem}
                activeClassName={styles.active}
            >
                <img
                    className={styles.img}
                    src="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png"
                    alt="avatar_user_massage"
                />
                <p>{props.name}</p>
            </NavLink>
        </div>
    );
};

export default DialogItem;
