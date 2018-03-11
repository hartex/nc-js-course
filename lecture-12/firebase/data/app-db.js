import { UsersRef, TweetsRef } from './remote-db';
import AppStore from '../store/store';

const AppDB = {
    init() {
        UsersRef.once('value').then((snapshot) => {
            const result = {
                type: 'INITIALIZE_USERS',
                users: snapshot.val()
            };
            AppStore.dispatch(result);
        });

        TweetsRef.once('value').then((snapshot) => {
            const result = {
                type: 'INITIALIZE_TWEETS',
                tweets: snapshot.val()
            };
            AppStore.dispatch(result);
        });
    },

    addTweet(tweet) {
        const newTweet = TweetsRef.push();
        newTweet.set(tweet);
    },

    removeTweet(tweetIndex) {
        TweetsRef.child(tweetIndex).remove();
    }
};

export default AppDB;