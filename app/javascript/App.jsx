import React from 'react';
import { StyleRoot, Style } from 'radium';
import { Header, Footer } from './components';
import { Home } from './views';
import { app, global } from './styles';

const App = () => (
    <StyleRoot>
      <Style rules={global} />
      <div style={app.main}>
        <Header title="React-Redux-Rails" />
          <Home />
        <Footer />
      </div>
    </StyleRoot>
);

export default App;
