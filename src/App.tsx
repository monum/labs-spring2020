import React from 'react';
import HomePage from './components/pages/HomePage';
import lunchbox from './theme/lunchbox';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/organisms/Header';
import ProfilePage from './components/pages/ProfilePage';
import Footer from './components/organisms/Footer';
import styled from './theme/Theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchPage from './connectors/pages/ConnectedSearchPage';


const Site = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`

const Content = styled.div`
  flex: 1 0 auto;
  width: 100%;

  &:after {
    content: '\00a0';
    display: block;
    height: 0;
    visibility: hidden;
  }
`

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={lunchbox}>
        <Site>
          <Content>
            <Header/>
            <Switch>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/search">
                <SearchPage />
              </Route>
              <Route path="/">
                <HomePage/>
              </Route>
            </Switch>
          </Content>
          <Footer/>
        </Site>
      </ThemeProvider>
    </Router>
  );
}

export default App;