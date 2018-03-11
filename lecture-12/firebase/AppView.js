import React from 'react';
import ReactDOM from 'react-dom';
import { TweetList } from './components/TweetList';
import { MainInput } from './components/MainInput';
import AppDB from './data/app-db';

const AppView = (props) => {
    props.initFunc();

    return (
        <div className="app">
            <MainInput key="input"/>
            <TweetList key="list"/>
        </div>)
};

ReactDOM.render(<AppView initFunc={AppDB.init}/>, document.getElementById('app-root'));