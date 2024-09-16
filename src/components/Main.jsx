import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cuisine from '../pages/Cuisine';
import { ProductGallery } from '../pages/Product Gallery';
import { ProductDetail } from '../pages/Product Gallery/ProductDetail';
import Searched from '../pages/Searched';
import Details from '../pages/TMDB/Details';
import Home from '../pages/TMDB/Home';
import SearchItem from '../pages/TMDB/SearchItem';
import TodoList from '../pages/TodoList';
import Weather from '../pages/Weather';
import CartPage from '../pages/eCommerce/CartPage';
import Shop from '../pages/eCommerce/Shop';
import SingleProduct from '../pages/eCommerce/SingleProduct';
import Contact from './Contact';
import Faq from './Faq';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import HomePage from './HomePage';
import Menus from './Menus';
import Tab from './React/Tab/Tab';
import { CartContext } from '../context';
import Works from '../pages/PortfolioPage';


export default function Main({ quantity, setQuantity }) {
  const [shopData, setShopData] = useState([])
  const { fakeEntry, setFakeEntry } = useContext(CartContext);
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
        <BrowserRouter>
          <Header fakeEntry={fakeEntry} />
          <div className="scroll-up" ref={scrollBtn} onClick={UpArrow}><BsFillArrowUpCircleFill /></div>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/portfolio' element={<Works />}></Route>
            <Route path='/hero' element={<Hero />}></Route>
            <Route path='/faq' element={<Faq />}></Route>
            <Route path='/menus/' element={<Menus />}>
              <Route path='/menus/cuisine/:type' element={<Cuisine />} />
              <Route path='/menus/searched/:search' element={<Searched />} />
            </Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/todo' element={<TodoList />}></Route>
            <Route path='/shop/' element={<Shop shopData={shopData} cartHandler={cartHandler} />}>
            </Route>
            <Route path='/singleProduct/:id' element={<SingleProduct cartHandler={cartHandler} />}></Route>
            <Route path='/cartpage' element={<CartPage />}></Route>
            <Route path='/weather' element={<Weather />}></Route>
            <Route path='/tab' element={<Tab />}></Route>
            <Route path='/gallery' element={<ProductGallery />}></Route>
            <Route path='/gallery/:id' element={<ProductDetail />}></Route>
            <Route path='/movie' element={<Home />}>
            </Route>
            <Route path='/movie/searchitem' element={<SearchItem />}>
            </Route>
            <Route path='/details/:id' element={<Details />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};
