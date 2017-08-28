import React, { Component } from 'react'
import { store } from '../store'
import { delManyTaskAction } from '../action/delAll'
class StatusBar extends Component {
  clear () {
    store.dispatch(delManyTaskAction)
  }
  render () {
    const info = this.props.info
    let count = 0
    info.forEach((item) => {
      item.isChoosed && count ++
    })
    return (
      <div className = "statusbar">
        <span>{ count }已完成/总数{ info.length }</span>
        {count? <button onClick = { this.clear }>清除已完成</button> : ''}
      </div>
    )
  }
}
module.exports = StatusBar