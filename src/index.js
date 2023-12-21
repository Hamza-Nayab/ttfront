import React from 'react';
import ReactDOM from 'react-dom/client';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App';
import { JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);