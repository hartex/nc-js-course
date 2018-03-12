import { UsersRef, TweetsRef, TweetRef } from './remote-db';
import AppStore from '../store/store';
import { initializeTweetsAction, tweetAddedAction, tweetRemovedAction } from "../store/actions";

const AppDB = {
    init() {
        UsersRef.once('value').then((snapshot) => {
            const result = {
                type: 'INITIALIZE_USERS',
                users: Object.values(snapshot.val())
            };
            AppStore.dispatch(result);
        });

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