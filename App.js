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
        this.setState({data: 'Data updated from a child class component...'});
    }

    render() {
        return (
            <div>
                <Content myDataProp={this.state.data} updateStateProp={this.updateState}></Content>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.updateStateProp}>Click</button>
                <h3>{this.props.myDataProp}</h3>
            </div>
        )
    }
}