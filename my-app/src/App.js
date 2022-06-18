import React from 'react';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Home />
      </Routes>
    </div>
  );
};

export default App;
