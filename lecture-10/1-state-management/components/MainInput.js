import React from 'react';
import { TweetService } from '../services/tweet-service';

export class MainInput extends React.Component {

    render() {
        return (
            <input
                type="text"
                className="main-input"
                placeholder="Enter tweet text"
                ref={(node) => this.inputElement = node}
                onKeyPress={this.handleKeyPress}/>
        )
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const inputValue = event.target.value;
            if (inputValue) {
                TweetService.addTweet(inputValue);
                this.inputElement.value = "";
            }
        }
    }
}