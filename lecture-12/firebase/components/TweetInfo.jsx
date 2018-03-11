import React from 'react';
import AppStore from '../store/store';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export const TweetInfo = (props) => {
    const tweetAuthor = AppStore.getState().users.find(user => user.id === props.tweet.userId);

    const onDelete = (event) => AppStore.dispatch({
        type: 'REMOVE_TWEET',
        tweetId: props.tweet.id
    });

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
                {props.tweet.date_added}
            </div>
            <button title="Delete tweet" onClick={onDelete}>x</button>
        </div>)
};