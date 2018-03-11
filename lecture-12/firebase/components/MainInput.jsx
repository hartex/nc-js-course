import React from 'react';
import AppStore from '../store/store';

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

                const newTweet = {
                    type: 'ADD_TWEET',
                    tweet: {
                        id: Math.floor(Math.random() * (100000 - 10000) + 10000),
                        userId: AppStore.getState().users[0].id,
                        text: inputValue,
                        date_added: new Date().toLocaleString().slice(0, -3)
                    }
                };

                AppStore.dispatch(newTweet);
                this.inputElement.value = "";
            }
        }
    }
}