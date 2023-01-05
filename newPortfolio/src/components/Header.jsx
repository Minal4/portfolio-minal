import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div id="waterHolder">
        <div className="header__top">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <h1><Link className="nav-item nav-link" to={"/"}>Minal</Link></h1>
              <div
                className="custom-nav">
                <div className="navbar-nav">
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
      </div>
    </header>
  );
};
