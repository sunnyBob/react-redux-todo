import React, { Component } from 'react'
import StatusBar from './statusBar'
import Input from './input'
import TaskList from './task_list'
import Container from './container'
import { store } from '../store'
import { addTaskAction } from '../action/addTask'

class Main extends Component {
  constructor (props) {
    super(props)
  }
  addTask (value) {
    store.dispatch(addTaskAction(value))
  }
  render () {
    const task = this.props.task
    return (
      <div className = "container">
        <Container>
          <div className="title">{ this.props.title }</div>
          <Input info = { task } addTask = { this.addTask }/>
          <TaskList info = { task }/>
          <StatusBar info = { task }/>
        </Container>
      </div>
    )
  }
}
module.exports = Main