import React from 'react';
import ReactDOM from 'react-dom';

import img from './img/background.jpg';
import './global.sass';
// assuming this is called from a file in a subdirectory of /myprojects/foo which contains .git directory

const pkg = require('../package.json');
const title = 'TEST!!!!!';

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <img className="img-fluid" src={img} alt="AYYYO" />
      </div>
    </div>
  </div>,
  document.getElementById(pkg.name)
);

if (process.env.HOT_MODULE === 'true') {
  module.hot.accept();
}
