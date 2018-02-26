import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Account from './Account';
import UserList from './UserList';

const App = () => (
    <div>
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/account">My account</Link>
            <Link to="/users">User list</Link>
            <Link to="/login">Log in</Link>
        </nav>
        <div>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/users" component={UserList}/>
            <Route path="/account" component={Account}/>
            <Route path="/login" component={Login}/>
        </div>
    </div>
);

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('app-root'));