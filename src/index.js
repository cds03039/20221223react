import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';


//import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import App2 from './App2';
import App3 from './App3';



ReactDOM.render(
  <BrowserRouter>
    <App3/>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

