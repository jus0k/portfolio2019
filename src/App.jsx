import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styles';
import { Work, About, Contact } from './pages';
import { Header, Footer } from './components';
import { Home } from './pages/Home';
import ScrollToTop from './utils/scrollToTop';

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <ScrollToTop>
            <Header />
            <Footer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
            </Switch>
            <GlobalStyle />
          </ScrollToTop>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
