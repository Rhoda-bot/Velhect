import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home';
import ProductDetails from './components/reuseables/product-details';
import Signup from './components/auth/signup';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/product-details/:title" element={<ProductDetails />} />
      <Route path="/contact-us" element={<Signup />} />
    </Routes>
  );
}

export default App;
