import React from 'react';
import { TweetInfo } from './TweetInfo';

export const Tweet = (props) => (
    <div className="tweet">
        <TweetInfo dateAdded={props.data.date_added} userId={props.data.userId} />
        <p className="tweet-text">{props.data.text}</p>
    </div>
);