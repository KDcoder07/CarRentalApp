import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';


if (!window.location.hash) {
  window.location.hash = '/home';  // lowercase to match route
}


createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
