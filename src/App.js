import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/configureStore';
import SearchPage from './SearchPage/SearchPage';
import MoviePage from './MoviePage/MoviePage';
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={SearchPage}/>
        <Route path="/search" component={SearchPage}/>
        <Route path="/movies/:id" component={MoviePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  </Provider>
);

export default App;
