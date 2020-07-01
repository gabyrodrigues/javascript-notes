import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={3000} />
            </BrowserRouter>
        </>
    );
}

export default App;