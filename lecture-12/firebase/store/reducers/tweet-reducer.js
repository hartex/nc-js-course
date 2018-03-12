import initialState from './../initial-state';
import AppData from "../../data/app-db";

const tweetReducer = function (state = initialState.tweets, action) {
    switch (action.type) {
        case 'INITIALIZE_TWEETS':
            action.tweets.forEach(a => state.unshift(a));
            break;
        case 'ADD_TWEET':
            AppData.addTweet(action.tweet);
            break;
        case 'TWEET_ADDED':
            state.unshift(action.tweet);
            break;
        case 'REMOVE_TWEET':
            // state = state.filter(tweet => tweet.id !== action.tweetId);
            AppData.removeTweet(action.tweetId);
            break;
        case 'TWEET_REMOVED':
            state = state.filter(tweet => tweet.id !== action.tweetId);
            break;
    }

    return state;
};

export default tweetReducer;