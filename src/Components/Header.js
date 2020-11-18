import React, { useState, useEffect } from 'react';
import '../css/scss/Header/Header.scss';
import Icons from './Icons';

function Header() {
  return (
    <header className="app__header">
      <div>Hello there header.</div>
      <div className="mobile-nav-container">
        <Icons classes="header__mobile-menu icon svg-icon" icon="icon-mobile-menu" />
      </div>
    </header>
  );
}

export default Header;
