import { Component } from 'react';

class Counter extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <span>counter : {this.state.count}</span>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
            </div>
        );
    }
}

export default Counter;