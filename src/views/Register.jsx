import React, { Component } from "react";
import { Link } from "react-router-dom";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
console.log(newUser);
  };
render() {
    const { errors } = this.state;
return (
  <div className="auth-wrapper">
  <div className="auth-inner">
  <form>
  <h3>Sign Up</h3>

  <div className="form-group">
      <label>First name</label>
      <input type="text" className="form-control" placeholder="First name" />
  </div>

  <div className="form-group">
      <label>Last name</label>
      <input type="text" className="form-control" placeholder="Last name" />
  </div>

  <div className="form-group">
      <label>Email address</label>
      <input type="email" className="form-control" placeholder="Enter email" />
  </div>

  <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" placeholder="Enter password" />
  </div>

  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
  <p className="forgot-password text-right">
      Already registered <a href="#">sign in?</a>
  </p>
</form>
</div>
</div>
  );
  }
}
export default Register;