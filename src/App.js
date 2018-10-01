/**
 * Import dependencies
 */

import React, { Component } from "react"
/**
 * Import styles
 */
import "bootstrap/dist/css/bootstrap.min.css"

/**
 * Import components
 */
import SignIn from "./components/sign-in.js"

/**
 * Import some config parameter
 */
import { host, routes } from "./components/config.js"

class App extends Component {
  render() {
    const route = host + routes["sign-in"]
    const titleForm = "title"
    return <SignIn route={route} titleForm={titleForm} />
  }
}

export default App
