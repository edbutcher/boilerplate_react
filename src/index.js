import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => (
    <div className="first_div">
        <h1>Hello world!!</h1>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'));