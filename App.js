import React, { Component } from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...', 'Item 5...']
        };

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        let newItems = this.state.items.concat([prompt('Create New Item')]);
        this.setState({ items: newItems });
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({ items: newItems });
    }

    render() {
        let items = this.state.items.map(function(item, i) {
            return (
                <div key={item} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </div>  
            );
        }.bind(this));

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}