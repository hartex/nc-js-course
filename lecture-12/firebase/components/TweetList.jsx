import React from 'react';
import { Tweet } from './Tweet';
import AppStore from '../store/store';

export class TweetList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // initial tweet list
            tweets: AppStore.getState().tweets
        }
    }

    render() {
        return (
            <div className="tweet-list">
                {this.state.tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>)}
            </div>
        )
    }

    componentDidMount() {
        AppStore.subscribe(() => this.setState({tweets: AppStore.getState().tweets}))
    }
}