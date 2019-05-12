import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/configureStore';
import SearchPage from './SearchPage/SearchPage';
import MoviePage from './MoviePage/MoviePage';
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const App = ({Router, location, context}) => (
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

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default App;
