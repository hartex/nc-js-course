import initialState from './../initial-state';
import AppData from "../../data/app-db";

const tweetReducer = function (state = initialState.tweets, action) {
    switch (action.type) {
        case 'INITIALIZE_TWEETS':
            action.tweets.forEach(a => state.push(a));
            break;
        case 'ADD_TWEET':
            state.unshift(action.tweet);
            AppData.addTweet(action.tweet);
            break;
        case 'REMOVE_TWEET':
            const tweetIndex = state.findIndex(tweet => tweet.id === action.tweetId);
            state = state.filter(tweet => tweet.id !== action.tweetId);
            AppData.removeTweet(tweetIndex);
            break;
    }

    return state;
};

export default tweetReducer;