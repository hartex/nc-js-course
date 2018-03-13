import AppStore from "./store";

export function initializeUsersAction(users) {
    return {
        type: 'INITIALIZE_USERS',
        users
    }
}

export function initializeTweetsAction(tweets) {
    return {
        type: 'INITIALIZE_TWEETS',
        tweets
    }
}

export function addNewTweetAction(text) {
    return {
        type: 'ADD_TWEET',
        tweet: {
            userId: AppStore.getState().users[0].id,
            text,
            date_added: new Date().toLocaleString().slice(0, -3)
        }
    }
}

export function tweetAddedAction(tweet) {
    return {
        type: 'TWEET_ADDED',
        tweet
    }
}

export function removeTweetAction(tweetId) {
    return {
        type: 'REMOVE_TWEET',
        tweetId
    }
}

export function tweetRemovedAction(tweetId) {
    return {
        type: 'TWEET_REMOVED',
        tweetId
    }
}
