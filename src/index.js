import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import allReducers from './reducers/index';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
