import React from 'react';
import { TweetInfo } from './TweetInfo';

export const Tweet = (props) => (
    <div className="tweet">
        <TweetInfo tweet={props.tweet} dateAdded={props.tweet.date_added} userId={props.tweet.userId} />
        <p className="tweet-text">{props.tweet.text}</p>
    </div>
);