import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from state...",
            content: "Content from state..."
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default App;