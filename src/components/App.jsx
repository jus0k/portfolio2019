import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from '../styles/GlobalStyle';
import { Home, Work, About, Contact } from '../pages';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <GlobalStyle />
      </Router>
    </>
  );
};

export default App;
