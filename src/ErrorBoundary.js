import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
          }}
        >
          <img
            style={{ margin: "auto", width: "700px" }}
            src="https://pbs.twimg.com/media/EV-4BzuXsAAB7WS.jpg"
            alt="oh no"
          ></img>

          <div>Something went horribly wrong</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
