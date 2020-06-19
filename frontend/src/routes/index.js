import React from 'react';
import Route from './Route';

import { BrowserRouter } from 'react-router-dom';

import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home';
import Notes from '../pages/Notes';
import Profile from '../pages/Profile';

const Routes = () => {
	return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/notes" component={Notes} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
		</BrowserRouter>
	);
}

export default Routes;