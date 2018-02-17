// basic JSX
const jxs = <h1>hi there!</h1>;

const user = {
    name: 'John',
    age: 22,
    avatar: 'https://ih0.redbubble.net/image.225771333.5422/flat,800x800,075,t.jpg'
};

// trying to do a trick
window.user1 = user;

// embedding expression inside JSX using curly brackets
const anotherJsx = (
    <div>
        <h3>Hi</h3>
        <p>{`My name is ${user.name.toUpperCase()} and I'm ${user.age} years old`}</p>
    </div>
);

/* const zzz = [(
    <h3 key="a">hi</h3>
    <p key="b">another line</p>
    <div key="c">and another line</div>)
]; */

// JSX attributes
// note that we use special names for attributes instead of html common attributes names
const avatar = <img src={user.avatar} className="app-image"/>;

const app = (
    // embedding variables
    <div>
        {anotherJsx}
        {avatar}
    </div>
)

ReactDOM.render(
    app,
    document.getElementById('app-root')
);

// that will not change the UI, because elements are immutable 
// and we are trying to change something after rendering
window.user1.age = 43;
