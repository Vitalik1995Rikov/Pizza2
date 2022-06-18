import React from 'react';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
