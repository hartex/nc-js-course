import { UsersRef, TweetsRef, TweetRef } from './remote-db';
import AppStore from '../store/store';
import {
    initializeTweetsAction,
    initializeUsersAction,
    tweetAddedAction,
    tweetRemovedAction
} from "../store/actions";

const AppDB = {
    init() {
        UsersRef.once('value').then((snapshot) =>
            AppStore.dispatch(initializeUsersAction(Object.values(snapshot.val()))));

        TweetsRef.once('value').then((snapshot) =>
            AppStore.dispatch(initializeTweetsAction(Object.values(snapshot.val()))))
    },

    addTweet(tweet) {
        const id = TweetsRef.push().key;
        const newTweet = {...tweet, id};
        TweetRef(id).set(newTweet)
            .then(() => AppStore.dispatch(tweetAddedAction(newTweet)))
    },

    removeTweet(id) {
        TweetRef(id).remove()
            .then(() => AppStore.dispatch(tweetRemovedAction(id)))
    }
};

export default AppDB;