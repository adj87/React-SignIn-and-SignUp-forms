/**
 * Import dependencies
 */
import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import validator from "validator"
import $ from "jquery"
import { host, routes } from "./config.js"

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userName: "", password: "" }
    this.route = this.props.route
    this.titleForm = this.props.titleForm
  }

  _handleSubmit = async e => {
    e.preventDefault()
    const route = this.route
    const user = this.state
    if (this._validateForm()) {
      $.ajax({
        type: "POST",
        url: route,
        data: user,
        success: function(resp) {
          //save the token inside a cookie
          document.cookie = "token=" + resp.token

          //hide the divError and the error message
          //divError.addClass("d-none")
          console.log("log-in succeded and token recieved")

          //redirect to the dashboard
          // window.location.href()
        },
        error: function(err) {
          //show the error in the console.log
          console.log(err)

          //display the divError and show the error message

          //divError.removeClass("d-none")
          //divError.text(err.statusText)

          //reset the form
          //formElement[0].reset()
        },
      })
    }
  }

  _handleChange = e => {
    const input = e.target
    const field = input.name
    const value = input.value

    const object = {}
    object[field] = value

    this.setState(object)
  }

  _validateForm = () => {
    const { userName, password } = this.state
    if (
      validator.isAlphanumeric(userName) &&
      validator.isAlphanumeric(password)
    ) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-8">
          <p
            style={{ fontSize: 4 + "rem", textAlign: "center" }}
            className="logo"
          >
            {this.titleForm}
          </p>
          <Form noValidate onSubmit={this._handleSubmit}>
            <FormGroup>
              <Label>User Name</Label>
              <Input
                type="text"
                className="form-control"
                name="userName"
                onChange={this._handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password:</Label>
              <Input
                type="password"
                className="form-control"
                name="password"
                onChange={this._handleChange}
              />
            </FormGroup>
            <FormGroup check>
              <Label className="form-check-label">
                <Input className="form-check-input" type="checkbox" /> Remember
                me
              </Label>
            </FormGroup>
            <Button type="submit" color="primary" id="submit" size="lg" block>
              Sign in
            </Button>
            <div className="dropdown-divider" />
            <a href="/sign-up.html">New around here? Sign up</a>
            <a href="#" className="sign-up-link">
              Forgot password?
            </a>
          </Form>
        </div>
      </div>
    )
  }
}

export default SignIn
