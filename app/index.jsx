import './main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
var component  = require('./component');

function main(){
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<App />, app);
};

main();
