import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
            </div>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact Page</h1>
            </div>
        )
    }
}