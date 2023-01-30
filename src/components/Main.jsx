import React, { useEffect } from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Faq from './Faq';
import Contact from './Contact';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import Menus from './Menus';
import Cuisine from '../pages/Cuisine';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useRef } from 'react';
import Searched from '../pages/Searched';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TodoList from '../pages/TodoList';
import Weather from '../pages/Weather';


export default function Main() {
  const scrollBtn = useRef();
  useEffect(() => {
    AOS.init();
  }, [])


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
  }, [])



  const UpArrow = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  return (
    <>
      <div className="App">

        <HashRouter>
          <Header />
          <div className="scroll-up" ref={scrollBtn} onClick={UpArrow}><BsFillArrowUpCircleFill /></div>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/hero' element={<Hero />}></Route>
            <Route path='/faq' element={<Faq />}></Route>
            <Route path='/menus/' element={<Menus />}>
              <Route path='/menus/cuisine/:type' element={<Cuisine />} />
              <Route path='/menus/searched/:search' element={<Searched />} />
            </Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/todo' element={<TodoList />}></Route>
            <Route path='/weather' element={<Weather />}></Route>
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
};
