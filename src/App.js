import React from 'react';
import './App.scss';
import webpackLogo from './images/webpack-logo.svg';

const App = () => (
  <div className='app'>
    <img className='app__logo' src={webpackLogo}/>
    <h1 className='app__title'>App component1</h1>
  </div>
);

export default App;
