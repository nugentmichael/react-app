import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState({data: 'Data updated...'});
    }

    render() {
        return (
            <div>
                <button onClick={this.updateState}>Click</button>
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}