import reducers from './reducers/task'
import { createStore } from 'redux'

const store = createStore(reducers)
export {
  store,
}