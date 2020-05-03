import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk';
import {database} from './database/config'
import './styles/stylesheet.css'

// our store that has a reducer
const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDom.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));