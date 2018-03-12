import React from 'react';
import AppStore from '../store/store';
import { addNewTweetAction } from "../store/actions";

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
                AppStore.dispatch(addNewTweetAction(inputValue));
                // example of so called "uncontrolled components" in React
                this.inputElement.value = "";
            }
        }
    }
}