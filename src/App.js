import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
        <GlobalStyle />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
