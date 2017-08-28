import React, { Component } from 'react'
class Container extends Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
module.exports = Container