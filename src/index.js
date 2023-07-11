import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import AppConextProvider from './context/AppContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <AppConextProvider>
    <App></App>
  </AppConextProvider>
  </Router>
 
);

