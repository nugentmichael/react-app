import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>This is the content.</p>
            </div>
        )
    }
}

export default App;