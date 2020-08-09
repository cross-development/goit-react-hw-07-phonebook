//Core
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from './components/App';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Styles
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
