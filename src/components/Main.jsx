import React, { useEffect, useState } from 'react';
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
import Tab from './React/Tab/Tab';
import Home from '../pages/TMDB/Home';
import Details from '../pages/TMDB/Details';
import SearchItem from '../pages/TMDB/SearchItem';
import Shop from '../pages/eCommerce/Shop';
import CartPage from '../pages/eCommerce/CartPage';


export default function Main() {
  const [shopData, setShopData] = useState([])
  const [fakeEntry, setFakeEntry] = useState(JSON.parse(localStorage.getItem('product')) || [])
  const [quantity, setQuantity] = useState(1)
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

  const fetchApi = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    let res = await data.json();
    setShopData(res)
  }
  useEffect(() => {
    fetchApi()
  }, [])


  const cartHandler = (data) => {
    setFakeEntry([...fakeEntry, { ...data, quantity: 1 }])
  }

  const UpArrow = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  localStorage.setItem('product', JSON.stringify(fakeEntry));

  useEffect(() => {
    JSON.parse(localStorage.getItem('product'))
  }, [fakeEntry])
  return (
    <>
      <div className="App">
        <HashRouter>
          <Header fakeEntry={fakeEntry} />
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
            <Route path='/shop' element={<Shop shopData={shopData} cartHandler={cartHandler} fakeEntry={fakeEntry} />}></Route>
            <Route path='/cartpage' element={<CartPage fakeEntry={fakeEntry} setFakeEntry={setFakeEntry} quantity={quantity} setQuantity={setQuantity} />}></Route>
            <Route path='/weather' element={<Weather />}></Route>
            <Route path='/tab' element={<Tab />}></Route>
            <Route path='/movie' element={<Home />}>
            </Route>
            <Route path='/searchitem' element={<SearchItem />}>
            </Route>
            <Route path='/details/:id' element={<Details />}></Route>
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
};
