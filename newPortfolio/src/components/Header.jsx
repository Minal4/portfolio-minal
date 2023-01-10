import React,{ useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [active, setActive] = useState(false);
  const list = document.querySelectorAll('.navbar-nav');
  list.forEach((item)=> {
    item.addEventListener('click',(e)=> {
      console.log(e.target,'tareget')
    })
  })
  return (
    <header>
        <div className="header__top">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="inner-container">
              <h1><NavLink className="nav-item nav-link" to={"/"}>Minal</NavLink></h1>
              <div
                className="custom-nav">
                  <button onClick={()=> setActive(!active)} className='hamburger'>{active ?<IoCloseOutline/>:<IoMenu />}Menu</button>
                <ul className={`navbar-nav ${active ? 'active': ''}`}>
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
