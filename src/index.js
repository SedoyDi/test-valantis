import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page404 from './components/Page404/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<App />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

