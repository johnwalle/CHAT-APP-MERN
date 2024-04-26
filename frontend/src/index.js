import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StyleOverrides from './components.js/StyleOverrides'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleOverrides />
    <App />
  </React.StrictMode>
);
