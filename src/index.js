import { createStore } from 'redux';
import React from "react";
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import App from './components/app';


const store = createStore(reducer);


      ReactDOM.render(
      <Provider store={store} >
        <App />
      </Provider>,
 document.getElementById('root'));

