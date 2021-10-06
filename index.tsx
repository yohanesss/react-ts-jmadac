import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import App from './src/App';

render(
  <App username={'asdf2213'} userType="asdf" />,
  document.getElementById('root')
);
