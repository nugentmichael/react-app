import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };

    findDomNodeHandler() {
        const myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'blue';
    }

    render() {
        return (
            <div>
                <button onClick={this.findDomNodeHandler}>Find DOM Node</button>
                <div id="myDiv">Node</div>
            </div>
        )
    }
}

export default App;