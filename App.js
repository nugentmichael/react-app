import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.data} onChange={this.updateState} />
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}