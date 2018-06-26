import React from 'react';
import ReactDOM from 'react-dom';

const pkg = require('../package.json');
const title = 'Life Form React Component TEST! YO!!!';

import img from './img/background.jpg';
import './global.sass';

console.log('process.env', process.env.HOT_MODULE);

ReactDOM.render(
  <div>
    <h1>{title}</h1>
    <img src={img} alt="AYYYO"/>
  </div>,
  document.getElementById(pkg.name)
);

if (process.env.HOT_MODULE === 'true') {
  module.hot.accept();
}
