import React, { useState, useEffect, useContext } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiChevronDown } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Theme from './Theme';
import { CartContext } from '../context';

export default function Header({ showCartHandler }) {
  const [active, setActive] = useState(false);
  const [dateTime, setTime] = useState(new Date());
  const [subMenu, setSubMenu] = useState(false);
  const { fakeEntry } = useContext(CartContext);


  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    }
  }, []);


  var lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const body = document.body
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      body.classList.remove('scrolled')
      header.setAttribute('style', 'transform: translateY(-100px)')

    } else {
      body.classList.add('scrolled')
      header.setAttribute('style', 'transform: translateY(0)')
    }

    if (scrollTop === 0) {
      body.classList.remove('scrolled')
    }

    lastScrollTop = scrollTop;
  })

  const handleOnClick = () => {
    setActive(false);


  }

  const showHandler = () => {
    setSubMenu(!subMenu);

  }

  return (
    <header className='header'>
      <div className="header__top">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="inner-container">
            <div className="site-branding flex gap-1">
              <img className='logo' src={logo} alt="logo" width={'55px'}></img>
              <h1><NavLink className="nav-item nav-link text-base md:text-lg" to={"/"}>Minal Munakarmi</NavLink></h1>
            </div>
            <button onClick={() => setActive(!active)} className='hamburger md:hidden'>{active ? <IoCloseOutline /> : <IoMenu />}Menu</button>
            <div
              className={`custom-nav ${active ? 'active' : ''}`}>

              <ul className={`navbar-nav`}>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"/"}>Home</NavLink></li>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"./portfolio"}>Portfolio</NavLink></li>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"./hero"}>About us</NavLink></li>
                <li><NavLink onClick={handleOnClick} className="nav-item nav-link" to={"./faq"}>Faq</NavLink></li>
                <li className='has-child'><a href='#!' onClick={showHandler} className="nav-item nav-link" >App</a><BiChevronDown onClick={showHandler} style={{ cursor: 'pointer' }} />
                  <ul className={`sub-menu ${subMenu ? 'show-sub' : ''}`}>
                    <li><NavLink className='nav-item-nav-link' onClick={handleOnClick} to={'/shop'}>eCommerce</NavLink></li>
                    <li><NavLink className='nav-item-nav-link' onClick={handleOnClick} to={'/todo'}>Todo list</NavLink></li>
                    <li><NavLink className='nav-item-nav-link' onClick={handleOnClick} to={'/weather'}>Weather</NavLink></li>
                    <li><NavLink className='nav-item-nav-link' onClick={handleOnClick} to={'/menus'}>Restro</NavLink></li>
                    <li><NavLink className='nav-item-nav-link' onClick={handleOnClick} to={'/tab'}>Tabs</NavLink></li>
                    <li><NavLink className='nav-item-nav-link' onClick={handleOnClick} to={'/movie'}>TMDB</NavLink></li>
                    <li><NavLink className='nav-item-nav-link' onClick={handleOnClick} to={'/gallery'}>Product  Gallery</NavLink></li>
                  </ul>
                </li>
                <li><Theme /></li>
                <li style={{ cursor: 'pointer', display: 'flex', gap: '0.5rem', position: 'relative' }} onClick={showCartHandler}><NavLink className='nav-item-nav-link' onClick={handleOnClick} to={'/cartpage'}><AiOutlineShoppingCart /> <span className='number'>{fakeEntry.length > 0 ? fakeEntry.length : '0'}</span></NavLink></li>
                <li className="nav-item nav-link time btn__link ">{` ${dateTime.toLocaleTimeString()}`}</li>
              </ul>
            </div>
          </div>
        </nav>
      </div >
    </header >
  );
};
