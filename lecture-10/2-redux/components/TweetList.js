import React from 'react';
import { Tweet } from './Tweet';
import AppStore from '../store';

export class TweetList extends React.Component {

    constructor(props) {
        super(props);
        const tweets = AppStore.getState().tweets;

        this.state = {
            // initial tweet list
            tweets: Array.from(tweets)
        }
    }

    render() {
        return (
            <div className="tweet-list">
                {this.state.tweets.map(tweet => <Tweet key={tweet.id} data={tweet}/>)}
            </div>
        )
    }

    componentDidMount() {
        AppStore.subscribe(action => this.setState(AppStore.getState().tweets))
    }
}