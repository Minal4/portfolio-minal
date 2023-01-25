import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Faq from './Faq';
import Contact from './Contact';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import Menus from './Menus';


export default function Main() {

  return (
    <>
      <div className="App">

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/hero' element={<Hero />}></Route>
            <Route path='/faq' element={<Faq />}></Route>
            <Route path='/recipe/' element={<Menus />} />
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};
