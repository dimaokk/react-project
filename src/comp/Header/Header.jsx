/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import headClass from './Header.module.css';

const Header = () => {
  return (
    <header className={headClass.header}>
      <img className={headClass.img} src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' />
      <h1 className={headClass.name}>Osaco</h1>
    </header>
  )
}

export default Header;