import React, { useState, useRef, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [active, setActive] = useState(false);

  const reference = useRef();


  useEffect(() => {
    const headerTop = reference.current.clientHeight;
    const bodyWidth = document.body;
    bodyWidth.style.paddingBottom = headerTop;
    bodyWidth.setAttribute('style', `padding-top: ${headerTop}px`)
  })


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

  return (
    <header className='header' ref={reference}>
      <div className="header__top">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="inner-container">
            <h1><img className='logo' src={logo} alt=""></img><NavLink className="nav-item nav-link" to={"/"}>Minal Munakarmi</NavLink></h1>
            <div
              className="custom-nav">
              <button onClick={() => setActive(!active)} className='hamburger'>{active ? <IoCloseOutline /> : <IoMenu />}Menu</button>
              <ul className={`navbar-nav ${active ? 'active' : ''}`}>
                <li><NavLink className="nav-item nav-link" to={"/"}>Home</NavLink></li>
                <li><NavLink className="nav-item nav-link" to={"./portfolio"}>Portfolio</NavLink></li>
                <li><NavLink className="nav-item nav-link" to={"./hero"}>About us</NavLink></li>
                <li><NavLink className="nav-item nav-link" to={"./faq"}>Faq</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
