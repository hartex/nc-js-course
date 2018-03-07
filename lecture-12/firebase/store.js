import { createStore, combineReducers } from 'redux';

const initialState = {
    users: [],
    tweets: []
};

const tweetReducer = function (state = initialState.tweets, action) {
    switch (action.type){
        case 'INITIALIZE_TWEETS':
            action.tweets.forEach(a => state.push(a));
            break;
        case 'ADD_TWEET':
            state.unshift(action.tweet);
            break;
    }

    return state;
};

const userReducer = function (state = initialState.users, action) {
    if (action.type === 'INITIALIZE_USERS') {
        return state.concat(action.users);
    }
    return state;
};

const reducers = combineReducers({
    tweets: tweetReducer,
    users: userReducer
});

const AppStore = createStore(reducers, initialState);

export default AppStore;