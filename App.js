import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial state...'
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        return (
            <div>
                <Content myDataProps={this.state.data} updateStateProp={this.updateState}></Content>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.myDataProps} onChange={this.props.updateStateProp} />
                <h3>{this.props.myDataProps}</h3>
            </div>
        )
    }
}