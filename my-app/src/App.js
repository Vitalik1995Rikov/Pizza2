import React from 'react';
import Layout from './layouts/Layout';
import { Pizza } from './components';

const App = () => {
  return (
    <div>
      <Layout>
        <Pizza />
      </Layout>
    </div>
  );
};

export default App;
