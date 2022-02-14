import React, { Component } from 'react';

class BuggyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
    
    componentDidUpdate() {
        if (this.state.count > 5) {
            throw new Error("Counter is more than 5 !!!")
        }
    }
 
    render() {
        return (
            <>
                Count: {this.state.count}
                <button
                    onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
                    Increase Counter
                </button>
            </>
        );
    }
}
  
export default BuggyComponent;