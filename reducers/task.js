import { TASK_ADD, TASK_DEL, TASK_TOGGLE, TASK_DEL_MANY } from '../action/actionType'
let next_id = 0
module.exports = (state = [], action) => {
  switch(action.type) {
    case TASK_ADD:
      const newState = [
        ...state,
        {
          isChoosed: false,
          value: action.text,
          id: next_id ++,
        }
      ]
      return newState
    case TASK_TOGGLE:
      const newState1 = state
      newState1.map((item, index) => {
        item.id == action.id && ( item.isChoosed = !item.isChoosed )
      }) 
      return newState1
    case TASK_DEL:
      let newState2  = state
      newState2.map((item, index) => {
        action.id == item.id && newState2.splice(index,1)
      })
      return newState2
    case TASK_DEL_MANY:
      let newState3  = state
      for(let i = 0, l = newState3.length; i < l; i++) {
        newState3[i].isChoosed && newState3.splice(i, 1)
        l --
        i --
      }
      return newState3
    default:
      return state
  }
}