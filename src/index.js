/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import epam from './img/logo_Lo3yy4y.png';

const App = () => (
    <div className="first_div">
        <h1>Hello world!!</h1>
        <img src={epam} alt="epam" />
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));

export default (a, b) => a + b;
