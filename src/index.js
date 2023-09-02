// core
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
// others
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';
import Context from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <Main />
  </Context>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
