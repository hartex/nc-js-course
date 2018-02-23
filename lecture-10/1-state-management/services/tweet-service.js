import { Store } from '../core/store';
import { EventBus } from '../core/bus';
import { Events } from '../services/events';
import { UserService } from './user-service';

export const TweetService = {
    getTweets() {
        return Store.data.tweets;
    },

    addTweet(text) {
        const newTweet = {
            id: Math.floor(Math.random() * (100000 - 10000) + 10000),
            userId: UserService.getCurrentUser().id,
            text: text,
            date_added: new Date().toLocaleString().slice(0, -3)
        };

        Store.data.tweets.unshift(newTweet);
        EventBus.fire(Events.TWEET_ADDED, newTweet);
    }
};