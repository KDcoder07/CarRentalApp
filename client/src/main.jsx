import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';

// Force initial redirect to /Home if hash is empty
if (!window.location.hash) {
  window.location.hash = '/Home';
}

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
