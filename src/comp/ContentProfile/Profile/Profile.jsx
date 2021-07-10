/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import profileCss from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <div>
                <img className={profileCss.img} src='https://img4.goodfon.ru/wallpaper/nbig/8/b1/lavanda-makro-fioletovyi.jpg' />
            </div>
            <div className={profileCss.profile__info}>
                <div ><img className={profileCss.img_prof} src="https://sun9-69.userapi.com/impg/9tQ4bEL72a1-S_byq9EjrQQ9x6NKo7iS9Y5VmQ/wLQlAhSafeM.jpg?size=720x1080&quality=96&sign=9e05b48851a3713cc1662b94858c8a7d&type=album" alt="" /></div>
                <div>description</div>
            </div>
        </div>
    )
}

export default Profile