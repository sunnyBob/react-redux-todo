import ReactDOM from 'react-dom'
import React from 'react'
import Main from '../component/tasks'
import { store } from '../store'

const render = () => {
  ReactDOM.render(
    <Main title = "React-Redux-Todos"  task = { store.getState() } />,
    document.getElementById("app")
  )
}
store.subscribe(render)
render()