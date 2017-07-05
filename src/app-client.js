'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';

window.onload = () => {
  ReactDOM.render(<Layout/>, document.getElementById('main'));
};