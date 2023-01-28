import React, { useState, useRef, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [active, setActive] = useState(false);
  const [dateTime, setTime] = useState(new Date());


  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    }
  }, []);

  const reference = useRef();
  const spaceAdd = () => {
    const headerTop = reference.current.clientHeight;
    const bodyWidth = document.body;
    bodyWidth.style.paddingBottom = headerTop;
    bodyWidth.setAttribute('style', `padding-top: ${headerTop}px`)
  }

  useEffect(() => {
    spaceAdd();
  }, [])


  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const bodyTop = document.body.scrollTop;
    var scrollTop = window.pageYOffset;
    if (bodyTop <= 10) {
      header.classList.add('elem');

    }
    if (scrollTop === 0) {
      header.classList.remove('elem')
    }
  })

  const handleOnClick = () => {
    setActive(false);
  }

  return (
    <header className='header' ref={reference}>
      <div className="header__top">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="inner-container">
            <h1><img className='logo' src={logo} alt="logo"></img><NavLink className="nav-item nav-link" to={"/"}>Minal Munakarmi</NavLink></h1>
            <div
              className="custom-nav">
              <button onClick={() => setActive(!active)} className='hamburger'>{active ? <IoCloseOutline /> : <IoMenu />}Menu</button>
              <ul className={`navbar-nav ${active ? 'active' : ''}`}>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"/"}>Home</NavLink></li>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"./portfolio"}>Projects</NavLink></li>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"./hero"}>About us</NavLink></li>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"./menus"}>Menus</NavLink></li>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"./faq"}>Faq</NavLink></li>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"./form"}>React Projects</NavLink></li>
                <li className="nav-item nav-link time btn__link  ">{` ${dateTime.toLocaleTimeString()}`}</li>
              </ul>
            </div>
          </div>
        </nav>
      </div >
    </header >
  );
};
