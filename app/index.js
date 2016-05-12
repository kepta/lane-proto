import { render } from 'react-dom';
import React from 'react';
import App from './App';
import './style.css';

const node = document.getElementById('app');

render(
  <App />,
  node
);
