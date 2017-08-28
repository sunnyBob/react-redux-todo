import { TASK_DEL } from './actionType'
export const delTaskAction = id => {
    return {
      type: TASK_DEL,
      id,
    }
}