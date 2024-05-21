import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ToastContainer from 'rsuite/esm/toaster/ToastContainer';
// import { config } from 'dotenv';

import './styles/index.less';

// config();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
