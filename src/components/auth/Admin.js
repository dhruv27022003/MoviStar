import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Admin extends Component {
  render() {
    return (
      <div>
        this is admin only auth people can see this
        <a href="/logout">Logout</a>
      </div>
    )
  }
}
