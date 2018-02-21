import React from 'react';
import ReactDOM from 'react-dom';
import {Comment} from './Comment';

class ToggbleComments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            comment: {
                text: 'some initial comment text',
                date: '22.12.2013: 12:33',
                user: {
                    name: 'harold',
                    avatar: 'https://naked-science.ru/sites/default/files/field/image/maxresdefault_60.jpg'
                }
            }
        };

        this.toggleComment = this.toggleComment.bind(this);
    }

    render() {
        return (
            <div>
                {this.state.visible && <Comment comment={this.state.comment}/>}
                <button onClick={this.toggleComment}>toggle comment</button>
                {this.state.visible && <CommentInput onChange={this.commentChange}/>}
            </div>
        )
    }

    toggleComment(event) {
        // event is "SyntheticEvent"
        console.log(event);
        this.setState((prevState, props) => ({
            visible: !prevState.visible
        }));
    }

    // declaration the same as above but with already correctly bound this
    commentChange = (event) => {
        const newValue = event.target.value;
        this.setState((prevState) => {
            const newState = Object.assign({}, prevState);
            newState.comment.text = newValue;
            return newState;
        })
    }
}

const CommentInput = (props) => (
    <div style={{'marginTop': '15px'}}>
        <label htmlFor="comment">New comment</label>
        <input type="text" name="text" id="comment" onChange={props.onChange}/>
    </div>
);

ReactDOM.render(<ToggbleComments/>, document.getElementById('app-root'));