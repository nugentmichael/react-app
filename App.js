import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <button onClick={this.forceUpdateHandler}>Focre Update!</button>
                <h4>Random Number: {Math.random()}</h4>
            </div>
        )
    }
}

export default App;