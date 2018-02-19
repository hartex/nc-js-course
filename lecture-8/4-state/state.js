class UserProfile extends React.Component {
    /*
      components defined as classes have some additional features. 
      local state is one of them: a feature available only to classes.
     */

    constructor(props) {
        // class components should always call the base constructor with props.
        super(props);

        // initial component state
        // lets suppose we got that info from some server-side API
        this.state = {
            user: {
                name: 'John',
                age: 33,
                avatar: 'https://ih0.redbubble.net/image.225771333.5422/flat,800x800,075,t.jpg'
            }
        };

        window.updateUserAge = (age) => {
            // we can pass object that will be merged with current state (but merge is shallow)
            // or we can pass a callback
            this.setState((prevState, props) => {
                const prev =  prevState.user;
                prev.age = age;
                return prev;
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>My name is {this.state.user.name} and I'm {this.state.user.age} years old</h2>
                <img style={{ width: '10%' }} src={this.state.user.avatar} alt="userpic" />
            </div>
        );
    }
}

ReactDOM.render(<UserProfile />, document.getElementById('app-root'));