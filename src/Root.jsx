import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import SearchPage from './pages/SearchPage/SearchPage';
import MoviePage from './pages/MoviePage/MoviePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const Root = ({Router, location, context, store}) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/" component={SearchPage}/>
        <Route path="/search" component={SearchPage}/>
        <Route path="/movies/:id" component={MoviePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default hot(module)(Root);
