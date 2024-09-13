// core
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
// others
import Main from './components/Main';
import Context from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <Main />
  </Context>
);

