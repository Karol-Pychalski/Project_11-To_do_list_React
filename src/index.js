import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
//ReactDOM.render(<App />, document.getElementById('app'));     (zmienione w 12.3)
