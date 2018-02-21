import React from 'react';

export class Comment extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.comment) {
            this.state = props.comment;
        } else {
            this.state = {}
        }
    }

    render() {
        return (
            <div style={{border: '3px solid red'}}>
                <p>{this.state.text}</p>
                <h4>Added at: {this.state.date}</h4>
                Added by:
                <UserProfile user={this.state.user}/>
            </div>
        )
    }
}

const UserProfile = (props) => (
    <div style={{border: '3px solid blue'}}>
        <Avatar img={props.user.avatar}/>
        <p>User name: {props.user.name}</p>
    </div>
);

const Avatar = (props) => (
    <div style={{border: '3px solid yellow'}}>
        <img src={props.img} alt="Avatar" style={{width: '10%'}}/>
    </div>
);