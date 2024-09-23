import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import HeaderPage from './components/UI/HeaderPage';
import CartPage from './components/Cart/CartPage';
import CartProvider from './store/context/ContextProvider';
import HomePage from './components/UI/HomePage';
import AboutPage from './components/UI/AboutPage';
import WishListPage from './components/Cart/WishListPage';
import LoginPage from './components/UI/LoginPage';
import ProceedPage from './components/Cart/ProceedPage';
import SuccessPage from './components/Cart/SuccessPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      <HeaderPage isLoggedIn = { isLoggedIn } setIsLoggedIn = {setIsLoggedIn} />
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage isLoggedIn = { isLoggedIn }setIsLoggedIn = { setIsLoggedIn }/>} />
          <Route path="/cart" element={<CartPage isLoggedIn = { isLoggedIn } />} />
          <Route path="/wishlist" element={<WishListPage/>} />
          <Route path="/proceed" element={<ProceedPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;