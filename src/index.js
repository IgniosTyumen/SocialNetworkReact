import * as serviceWorker from './serviceWorker';
import store from "./redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from "react-redux";

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root')) ;

    serviceWorker.unregister();
