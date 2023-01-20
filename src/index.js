import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './App';

const appElement = document.getElementById('app');
ReactDOM.render(<App store={store} />, appElement);
