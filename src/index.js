import { hydrate } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const app = (
  <App
    Router={BrowserRouter}
  />
);

hydrate(app, document.getElementById('app'));
