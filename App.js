import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        const item = "setState...";
        const myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray});
    };

    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>Set State</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        )
    }
}

export default App;