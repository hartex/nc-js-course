import React from 'react';
import { Link, Route } from 'react-router-dom';
import UserStore from './user-store';
import User from "./User";

const UserList = (props) => (
    <div className="user-list">
        Users:
        <div>{
            UserStore.data.map(user =>
                <div>
                    <Link key={user.id} to={"/users/" + user.id}>{user.name}</Link>
                </div>)
        }
        </div>
        <Route path="/users/:userId" component={User}/>
    </div>
);

export default UserList;