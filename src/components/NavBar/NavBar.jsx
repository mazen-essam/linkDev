import React, { useState } from 'react';
import logo from '../../assets/images/Link_logo_vertical_color_light_RGB.svg';
import logoMobile from '../../assets/images/Logo.webp';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [clicked, setClicked] = useState(-1);
  const [contrastClicked, setContrastClicked] = useState(false);
  const handleFontResize = size => {
    switch (size) {
      case -1:
        console.log('minus');
        document.documentElement.style.setProperty(
          '--primary-fontSize',
          '-2px'
        );
        break;

      case 0:
        console.log('nor');

        document.documentElement.style.setProperty('--primary-fontSize', '0px');
        break;

      case 1:
        console.log('plus');

        document.documentElement.style.setProperty(
          '--primary-fontSize',
          '+2px'
        );
        break;

      default:
        break;
    }
  };

  return (
    <nav nav className="header__nav flex container__header">
      <span className="icon-menu header__nav__menu"></span>
      <div className="header__nav__mobile flex">
        <Link to="/">
          <img
            src={logo}
            alt="linkdev logo"
            className="header__nav__menu__desktop"
          />

          <img
            src={logoMobile}
            alt="linkdev logo"
            className="header__nav__menu__mobile"
          />
        </Link>
      </div>
      <span className="icon-search header__nav__search--mobile"></span>
      <div className="header__nav__desktop flex">
        <div className="font__resize_btns">
          <button
            className={clicked === 0 ? 'clicked' : ''}
            onClick={() => {
              handleFontResize(-1);
              setClicked(0);
            }}
          >
            A<span>-</span>
          </button>
          <button
            className={clicked === 1 ? 'clicked' : ''}
            onClick={() => {
              handleFontResize(0);

              setClicked(1);
            }}
          >
            A
          </button>
          <button
            className={clicked === 2 ? 'clicked' : ''}
            onClick={() => {
              setClicked(2);
              handleFontResize(1);
            }}
          >
            A<span>+</span>
          </button>
        </div>
        <span
          className={`icon-contrast ${contrastClicked ? 'clicked' : ''}`}
          onClick={() => {
            if (document.body.classList.contains('high-contrast')) {
              document.body.classList.remove('high-contrast');
              setContrastClicked(false);
            } else {
              document.body.classList.add('high-contrast');
              setContrastClicked(true);
            }
          }}
        ></span>

        <span className="icon-search" style={{ color: 'white' }}></span>
        <select name="dropdown-lang" className="dropdown-lang">
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default NavBar;
