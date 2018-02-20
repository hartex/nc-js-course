import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Comment } from '../6-tree/tree';

class ToggbleComments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.toggleComment = this.toggleComment.bind(this);
    }

    render() {
        return (
            <div>
                {this.state.visible ? <Comment /> : false}
                <button onClick={toggleComment}>toggle comment</button>
            </div>)
    }

    toggleComment(event) {
        console.log(event);
        this.setState((prevState, props) => ({
            visible: !prevState.visible
        }));
    }
}

ReactDOM.render(<ToggbleComments />, document.getElementById('app-root'));