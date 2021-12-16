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
                <div ><img className={profileCss.img_prof} src="https://sun9-69.userapi.com/impg/9tQ4bEL72a1-S_byq9EjrQQ9x6NKo7iS9Y5VmQ/wLQlAhSafeM.jpg?size=720x1080&quality=96&sign=9e05b48851a3713cc1662b94858c8a7d&type=album" alt="" /></div>
                <div>description</div>
            </div>
        </div>
    )
}

export default Profile