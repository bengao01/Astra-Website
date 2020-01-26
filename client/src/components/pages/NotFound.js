import React, { Component } from "react";
import "./NotFound.css"

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="NotFound-text">404 Not Found</h1>
        <p className="NotFound-text">The page you requested couldn't be found.</p>
      </div>
    );
  }
}

export default NotFound;
