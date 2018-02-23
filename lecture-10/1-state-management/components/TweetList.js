import React from 'react';
import { Tweet } from './Tweet';
import { TweetService } from '../services/tweet-service';
import { Events } from '../services/events';
import { EventBus } from "../core/bus";

export class TweetList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // initial tweet list
            tweets: TweetService.getTweets()
        }
    }

    render() {
        return (
            <div className="tweet-list">
                {this.state.tweets.map(tweet => <Tweet key={tweet.id} data={tweet} />)}
            </div>
        )
    }

    componentDidMount() {
        EventBus.subscribe(Events.TWEET_ADDED, () => this.setState(TweetService.getTweets()))
    }
}