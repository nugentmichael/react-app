import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }

        this.setNewNumber = this.setNewNumber.bind(this);
    };

    setNewNumber() {
        this.setState({data: this.state.data + 1});
    }

    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>Set New Number</button>
                <Content myNumber={this.state.data} />
            </div>
        )
    }
}

class Content extends Component {
    componentWillMount() {
        console.log('Component Will Mount');
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    componentWillReceiveProps(newProps) {
        console.log('Component Will Receive Props');
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(newProps, newState) {
        console.log('Component Will Update');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update');
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}

export default App;