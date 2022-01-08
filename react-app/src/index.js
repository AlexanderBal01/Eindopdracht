import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/HomePagina/Home';
import Producten from './Components/ProductenPagina/ProductenMain';
import { Provider } from 'react-redux';
import { store } from './Store/index';
import Winkelmandje from './Components/WinkelmandjePagina/Winkelmandje';
import ProductDetail from './Components/ProductenPagina/ProductDetail';

ReactDOM.render(
  <React.StrictMode>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
          <Route path="*" element={<p>Not found</p>} />
          <Route path="/" element={<Home />} />
          <Route path="/producten">
            <Route index element={<Producten />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route> 
          <Route path="winkelmandje" element={<Winkelmandje />} />
        </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
