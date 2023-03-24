import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Prune from './react-GI/hard';
import Apple from './react-GI/easy';
import Strawberry from './react-GI/medium';
import Orange from './react-GI/veryEasy';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Prune />
    <Apple />
    <Orange />
    <Strawberry />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
