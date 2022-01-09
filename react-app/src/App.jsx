import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import HomePagina from './Paginas/HomePagina';
import ProductenPagina from './Paginas/ProductenPagina';
import WinkelmandjePagina from './Paginas/WinkelmandjePagina';
import CheckoutPagina from './Paginas/CheckoutPagina';
import './Components/CSS/Footer.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="*" element={<p>Not found</p>} />
        <Route path="/" element={<HomePagina />} />
        <Route path="/producten">
          <Route index element={<ProductenPagina />} />
        </Route> 
        <Route path="/winkelmandje" element={<WinkelmandjePagina />} />
        <Route path="/checkout" element={<CheckoutPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
