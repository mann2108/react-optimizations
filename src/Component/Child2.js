import React, { Component } from 'react';
class Child2 extends Component {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.count !== nextState.count) {
        return true;
      }
      return false;
    }
  
    render() {
        return (
        <>
            <button
                color={this.props.color}
                onClick={() => this.setState(state => ({count: state.count + 1}))}>
                Count: {this.state.count}
            </button>
            <hr />
        </>
      );
    }
}
  
export default Child2;