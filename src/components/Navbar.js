import React, { useState } from 'react';
import menu from '../Assets/menu.png';
import office from '../Assets/office.png';
import close from '../Assets/hamburgerclose.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div className="NavbarMainContainer">
      <div
        role="button"
        tabIndex={0}
        className={isOpen ? 'hideMenu' : 'showMenu'}
        onKeyPress={handleKeyPress}
      >
        <img src={menu} onClick={ToggleNav} alt="hamburger" className="hamburger" />
      </div>

      <div className={isOpen ? 'desktopLogoNone' : 'desktopLogo'} >
        <img src={office} className="hamburger" alt="hamburgerDesktop" />
      </div>

      <div className={isOpen ? 'open' : 'close'}>

        <ul>
          <li className="mobileLogo">
            <img src={office} className="hamburger" alt="hamburgerMobile" />
          </li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
        </ul>
        <div
          role="button"
          tabIndex={0}
          onKeyPress={handleKeyPress}
          className="hamburger hamClose"
        >
          <img src={close} onClick={closeNav} className="hamburger hamClose" alt="hamburgerClose" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
