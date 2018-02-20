class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // will be invoked when component finished rendering to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // will be invoked when component is being removed from the DOM
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // due to setState method React knows that UI should be updated
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/* we can remove code below and UI will stop it's updates */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('app-root'));