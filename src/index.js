import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,
document.getElementById('root')
);
