import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    component: "First component...",
                    id: 1
                },
                {
                    component: "Second component...",
                    id: 2
                },
                {
                    component: "Third component...",
                    id: 3
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.data.map((dynamicComponent, i) => <Content key={i} componentData={dynamicComponent} />)}
                </div>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <div>{this.props.componentData.component}</div>
                <div>{this.props.componentData.id}</div>
            </div>
        );
    }
}