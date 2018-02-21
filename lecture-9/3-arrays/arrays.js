import React from 'react';
import ReactDOM from 'react-dom';
import {Comment} from '../2-handling-events/Comment';

const commentsData = {
    text: 'some initial comment text',
    date: '22.12.2013: 12:33',
    user: {
        name: 'harold',
        avatar: 'https://naked-science.ru/sites/default/files/field/image/maxresdefault_60.jpg'
    }
};

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);

const App = (
    [
        <ul key="elements">{listItems}</ul>,
        <div key="components">
            {/* note that keys is not being passed as props */}
            {numbers.map((v) => {
                const data = Object.assign({}, commentsData);
                data.text = data.text + v;
                return <Comment key={v} comment={data}/>
            })}
        </div>
    ]
);

ReactDOM.render(App, document.getElementById('app-root'));
