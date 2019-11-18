import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter basename="https://ifuenteromero.github.io/browser/">

<App />
</BrowserRouter>

, document.getElementById('root'));
