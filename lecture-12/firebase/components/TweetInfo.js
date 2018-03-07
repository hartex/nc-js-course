import React from 'react';
import AppStore from '../store';

export const TweetInfo = (props) => {
    const tweetAuthor = AppStore.getState().users.find(user => user.id === props.userId);

    return (
        <div className="tweet-info">
            <div className="avatar">
                <img src={tweetAuthor.avatar} alt={tweetAuthor.name} />
            </div>
            <div className="info">
                <span>Added by:</span>
                {tweetAuthor.name}
            </div>
            <div className="info">
                <span>Added at:</span>
                {props.dateAdded}
            </div>
        </div>)
};