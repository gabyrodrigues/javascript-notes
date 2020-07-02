import React from 'react';
import Route from './Route';

import { BrowserRouter, Switch } from 'react-router-dom';

import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home';
import NotesPage from '../pages/Notes';
import ProfilePage from '../pages/Profile';

const Routes = () => {
	return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/notes" component={NotesPage} isPrivate />
                <Route path="/profile" component={ProfilePage} isPrivate />
            </Switch>
		</BrowserRouter>
	);
}

export default Routes;