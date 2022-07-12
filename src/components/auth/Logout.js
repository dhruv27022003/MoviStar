import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
  render() {
    return (
      <div>
        <h1>YOU ARE LOGGED OUT</h1>
        <a href="/login1">Login</a>
      </div>
    )
  }
}
