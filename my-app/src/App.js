import React from 'react';
import Layout from './layouts/Layout';
import { Pizza, Filters } from './components';

const App = () => {
  return (
    <div>
      <Layout />
      <Filters />
      <Pizza />
    </div>
  );
};

export default App;
