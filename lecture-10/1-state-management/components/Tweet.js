import React from 'react';
import { UserService } from '../services/user-service';
import { TweetInfo } from './TweetInfo';

export const Tweet = (props) => (
    <div className="tweet">
        <TweetInfo dateAdded={props.data.date_added} userId={props.data.userId} />
        <span className="tweet-text">{props.data.text}</span>
    </div>
);