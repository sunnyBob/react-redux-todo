import React, { Component } from 'react'
import TaskItem from './taskItem'
class TaskList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { info } = this.props
    const items = []
    info.forEach( (item) => {
      items.push( <TaskItem item = { item } key = { item.id }/>)
    })
    return (
      <div>
        { items }
      </div>
    )
  }
}
module.exports = TaskList