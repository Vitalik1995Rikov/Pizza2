import React from 'react';
import Layout from './layouts/Layout';
import { Pizza, Filters, Sort } from './components';

const App = () => {
  return (
    <div>
      <Layout />
      <div className="flex justify-around">
        <Filters />
        <Sort />
      </div>
      <Pizza />
    </div>
  );
};

export default App;
