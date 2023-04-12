import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'
import Provider from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

