import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error) {
        this.setState({
            hasError: true
        })
    }
    render() {
        return (
            <>
                {this.state.hasError && `Something Went Wrong`}
                {!this.state.hasError && this.props.children}
            </>
        );
    }
}
  
export default ErrorBoundary;