import { TASK_ADD } from './actionType'
export const addTaskAction = value => {
  return {
    type: TASK_ADD,
    text: value,
  }
}