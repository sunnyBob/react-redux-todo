import React, { Component } from 'react'
import { store } from '../store'
import { delTaskAction } from '../action/delTask'
import { toggleAction } from '../action/toggle'
class TaskItem extends Component {
  constructor (props) {
    super(props)
  }
  handleClick (e) {
    const id = e.target.getAttribute("data-id")
    store.dispatch(toggleAction(id))
  }
  delTask (e) {
    const id = e.target.getAttribute("data-id")
    store.dispatch(delTaskAction(id))
  }
  render () {
    const { value, isChoosed, id } = this.props.item
    let style = isChoosed ? 'line-through' : ''
    return (
      <div className = "item" onClick = { this.changeStyle }>
        <input type = "checkbox" data-id = { id } onClick = { this.handleClick } defaultValue = { isChoosed }/>
        <span ref = "content" className = { style }>{ value }</span>
        <button data-id = { id } onClick = { this.delTask }>删除</button>
      </div>
    )
  }
}
module.exports = TaskItem
