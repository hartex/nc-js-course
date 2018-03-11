import { createStore, combineReducers } from 'redux';
import tweetReducer from './reducers/tweet-reducer';
import userReducer from './reducers/user-reducer';
import initialState from './initial-state';

const reducers = combineReducers({
    tweets: tweetReducer,
    users: userReducer
});

const AppStore = createStore(reducers, initialState);

export default AppStore;