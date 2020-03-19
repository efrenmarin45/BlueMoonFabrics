import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { productSchema } from "../../server/models/products"

class Display extends Component {
  render() {
    return (
      <div className="navbar-fixed">
          { productSchema }
      </div>
    );
  }
}
export default Display;