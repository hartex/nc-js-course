class Comment extends React.Component {
    constructor(props) {
        super(props);

        // get comment data from somewhere
        this.state = {
            comment: {
                text: 'some comment text',
                date: '22.12.2013: 12:33',
                user: {
                    name: 'harold',
                    avatar: 'https://naked-science.ru/sites/default/files/field/image/maxresdefault_60.jpg'
                }
            }
        };

        window.updateComment = (text) => {
            this.setState({
                comment: {
                    text: text,
                    date: new Date().toLocaleString(),
                    user: {
                        name: 'harold',
                        avatar: 'https://naked-science.ru/sites/default/files/field/image/maxresdefault_60.jpg'
                    }
                }
            })
        }
    }


    render() {
        return (
            <div style={{border: '3px solid red'}}>
                <p>{this.state.comment.text}</p>
                <h4>Added at: {this.state.comment.date}</h4>
                Added by:
                {/* pass parent component data to child with props */}
                <UserProfile user={this.state.comment.user}/>
            </div>)
    }
}

class UserProfile extends React.Component {

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

    render() {
        return (
            <div style={{border: '3px solid blue'}}>
                {/* pass components props further in hierarchy */}
                <Avatar img={this.props.user.avatar}/>
                <p>User name: {this.props.user.name}</p>
            </div>
        )
    }
}

class Avatar extends React.Component {
    render() {
        return (
            <div style={{border: '3px solid yellow'}}>
                <img src={this.props.img} alt="Avatar" style={{width: '10%'}}/>
            </div>
        )
    }
}

ReactDOM.render(<Comment/>, document.getElementById('app-root'));