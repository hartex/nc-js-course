import React from 'react';
import ReactDOM from 'react-dom';
import { TweetList } from './components/TweetList';
import { MainInput } from './components/MainInput';

const App = (
    <div className="app">
        <MainInput key="input"/>
        <TweetList key="list"/>
    </div>);

ReactDOM.render(App, document.getElementById('app-root'));