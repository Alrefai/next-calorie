import type { Data } from '../types'

export const MSG = {
  SHOW_FORM: `SHOW_FROM`,
  MEAL_INPUT: `MEAL_INPUT`,
  CALORIES_INPUT: `CALORIES_INPUT`,
  SAVE_MEAL: `SAVE_MEAL`,
  DELETE_MEAL: `DELETE_MEAL`,
  EDIT_MEAL: `EDIT_MEAL`,
  ADD_DATA: `ADD_DATA`,
  UNDO: `UNDO`,
  REDO: `REDO`,
} as const

export const showFormAction = (showForm: boolean) =>
  ({ type: MSG.SHOW_FORM, showForm } as const)

export const mealInputAction = (description: string) =>
  ({ type: MSG.MEAL_INPUT, description } as const)

export const caloriesInputAction = (calories: string) =>
  ({ type: MSG.CALORIES_INPUT, calories } as const)

export const saveMealAction = () => ({ type: MSG.SAVE_MEAL } as const)

export const deleteMealAction = (id: number, key?: string) =>
  ({ type: MSG.DELETE_MEAL, id, key } as const)

export const editMealAction = (editId: number, key?: string) =>
  ({ type: MSG.EDIT_MEAL, editId, key } as const)

export const addDataAction = (data: Data) =>
  ({ type: MSG.ADD_DATA, data } as const)

export const undoAction = (key?: string) => ({ type: MSG.UNDO, key } as const)
export const redoAction = (key?: string) => ({ type: MSG.REDO, key } as const)

export type Action =
  | ReturnType<typeof showFormAction>
  | ReturnType<typeof mealInputAction>
  | ReturnType<typeof caloriesInputAction>
  | ReturnType<typeof saveMealAction>
  | ReturnType<typeof deleteMealAction>
  | ReturnType<typeof editMealAction>
  | ReturnType<typeof addDataAction>
  | ReturnType<typeof undoAction>
  | ReturnType<typeof redoAction>
