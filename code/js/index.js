import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import WebPages from './components/WebPage';





const store = createStore(allReducers);

ReactDOM.render(
  <Provider store = {store}>
  <WebPages /> 
 </Provider>,
  document.getElementById('fieldToShow')
);
