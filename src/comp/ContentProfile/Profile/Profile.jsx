/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import profileCss from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <div>
                <img className={profileCss.img} src='https://img.freepik.com/free-photo/background-in-dark-colors-with-triangular-elements_183270-846.jpg?size=626&ext=jpg' />
            </div>
            <div className={profileCss.profile__info}>
                <div ><img className={profileCss.img_prof} src="https://png.pngtree.com/png-vector/20190120/ourlarge/pngtree-schoolchildren-going-to-school-student-at-school-student-studying-schoolboy-studying-png-image_491181.jpg" alt="" /></div>
                <div>description</div>
            </div>
        </div>
    )
}

export default Profile