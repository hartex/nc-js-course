import React from 'react';
import UserStore from "../user-store";

const User = (props) => {
    if (props.match) {
        const user = UserStore.getUserById(+props.match.params.userId);
        return (
            <div className="user">
                <div>User name: {user.name}</div>
                <div>User age: {user.age}</div>
                <div>Other user details</div>
                <div>Blah blah blah blah</div>
            </div>)
    }
    else {
        return null;
    }
};

export default User;