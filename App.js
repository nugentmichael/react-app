import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from props...",
            content: "Content from props..."
        };
    }

    render() {
        return (
            <div>
                <Header headerProps={this.state.header} />
                <Content contentProps={this.state.content} />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProps}</h1>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <p>{this.props.contentProps}</p>
            </div>
        )
    }
}

export default App;