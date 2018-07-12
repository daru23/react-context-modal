import React from 'react';
import {render} from 'react-dom';
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// App
import App from './components/App';

render( <HashRouter>
            <App/>
        </HashRouter>,
    document.getElementById('app')
);