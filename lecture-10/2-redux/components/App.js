import React from 'react';
import ReactDOM from 'react-dom';
import { TweetList } from './TweetList';
import { MainInput } from './MainInput';

const App = (
    <div className="app">
        <MainInput key="input"/>
        <TweetList key="list"/>
    </div>);

ReactDOM.render(App, document.getElementById('app-root'));