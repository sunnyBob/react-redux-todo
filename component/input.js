import React, { Component } from 'react'

class Input extends Component {
  constructor (props) {
    super(props)
    this.addTask = this.addTask.bind(this)
  }
  addTask (e) {
    const keyCode = e.keyCode || e.which
    if(keyCode === 13) {
      this.props.addTask(e.target.value)
      e.target.value = ''
    }
  }
  render () {
    let { info } = this.props
    return (
      <div>
        <input className = "task_input" placeholder = "what's your task?" onKeyDown = { this.addTask }/>
      </div>
    )
  }
}
module.exports = Input