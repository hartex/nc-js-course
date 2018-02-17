/*
  functional component
  components must start with upper case letter 
 */
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
const app = (
    <div>
        <FunctionalComponent name="John" />
        <ClassComponent name="Jack" />
    </div>
);

// same as above but using component
function App(props){
    return (
        <div>
            <FunctionalComponent name="John" />
            <ClassComponent name="Jack" />
        </div>
    )
}

ReactDOM.render(app, document.getElementById('app-root'));