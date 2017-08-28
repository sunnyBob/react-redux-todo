import { TASK_TOGGLE } from './actionType'
export const toggleAction = id => {
    return {
      type: TASK_TOGGLE,
      id,
    }
}