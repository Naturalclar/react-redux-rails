import React from 'react';
import { Header, Footer } from './components';
import { Home } from './views';

const App = () => (
  <div>
    <Header title="React-Redux-Rails" />
      <Home />
    <Footer />
  </div>
);

export default App;
