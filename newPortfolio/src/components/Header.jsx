import React,{ useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Header() {
  const [active, setActive] = useState(false);
  console.log(active,'active')
  return (
    <header>
        <div className="header__top">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="inner-container">
              <h1><Link className="nav-item nav-link" to={"/"}>Minal</Link></h1>
              <div
                className="custom-nav">
                  <button onClick={()=> setActive(!active)} className='hamburger'>{active ?<IoCloseOutline/>:<IoMenu />}Menu</button>
                <div className={`navbar-nav ${active ? 'active': ''}`}>
                  <Link className="nav-item nav-link" to={"/"}>Home</Link>
                  <Link className="nav-item nav-link" to={null}>Portfolio</Link>
                  <Link className="nav-item nav-link" to={null}>About us</Link>
                  <Link className="nav-item nav-link" to={null}>Services</Link>
                  <Link className="nav-item nav-link" to={null}>Faq</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
    </header>
  );
};
