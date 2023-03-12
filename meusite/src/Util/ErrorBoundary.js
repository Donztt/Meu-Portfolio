import { Component } from "react";
 
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
 
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    const { hasError, error } = this.state;
 
    if (hasError) {
      return (
        <p className="text-center text-danger">
          {this.props.message}
        </p>
      );
    }
 
    return this.props.children;
  }
}
 
export default ErrorBoundary;