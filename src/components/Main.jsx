import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Faq from './Faq';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import Menus from './Menus';
import Cuisine from '../pages/Cuisine';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useRef } from 'react';
import { useEffect } from 'react';


export default function Main() {
  const scrollBtn = useRef();

  useEffect(() => {
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset;
      if (scrollTop > 500) {
        // scrollBtn.current.setAttribute('style', 'opacity: 1');
        scrollBtn.current.setAttribute('style', 'transform: translateY(0) scale(4);opacity: 1')
        // console.log('scrolled 500')
      } else {
        scrollBtn.current.setAttribute('style', 'transform: translateY(-10px) scale(4);opacity: 0')
      }
    })
  })



  const UpArrow = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  return (
    <>
      <div className="App">

        <BrowserRouter>
          <Header />
          <div className="scroll-up" ref={scrollBtn} onClick={UpArrow}><BsFillArrowUpCircleFill /></div>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/hero' element={<Hero />}></Route>
            <Route path='/faq' element={<Faq />}></Route>
            <Route path='/menus/' element={<Menus />}>
              <Route path='/menus/cuisine/:type' element={<Cuisine />} />
            </Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};
