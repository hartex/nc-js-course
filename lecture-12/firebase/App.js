import React from 'react';
import ReactDOM from 'react-dom';
import { TweetList } from './components/TweetList';
import { MainInput } from './components/MainInput';
import { UsersDB, TweetsDB } from './firebase-app';
import AppStore from './store';

const App = () => {
    UsersDB.once('value').then((snapshot) => {
        const result = {
            type: 'INITIALIZE_USERS',
            users: Object.values(snapshot.val())
        };
        AppStore.dispatch(result);
    });

    TweetsDB.once('value').then((snapshot) => AppStore.dispatch(
        {
            type: 'INITIALIZE_TWEETS',
            tweets: Object.values(snapshot.val())
        }));

    return (
        <div className="app">
            <MainInput key="input"/>
            <TweetList key="list"/>
        </div>)
};

ReactDOM.render(<App/>, document.getElementById('app-root'));