// functional component
const FunctionalComponent = (props) => {
    return <h3>Hi, {props.name}!</h3>
};

// class component
class ClassComponent extends React.Component {
    render() {
        return <h3>Hi, {this.props.name}!</h3>;
    }
}

// composing multiple components in one React element
const App =
    <div>
        <FunctionalComponent name="John" />
        <ClassComponent name="Jack" />
    </div>;

ReactDOM.render(App, document.getElementById('app-root'));