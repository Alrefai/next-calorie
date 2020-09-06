import type { Action, Data, Model } from '../types'
import { MSG } from '../actions'
import { onSaveNewMeal } from './on-save-new-meal'
import { onSaveEditedMeal } from './on-save-edited-meal'

const assertError = (message: string): never => {
  throw new Error(message)
}

const onCaloriesInput = (state: Model, calories: string): Model => {
  if (!/^\d{0,4}$/.test(calories)) return state

  return { ...state, calories: +calories, saveButton: `Save` }
}

const onDeleteMeal = (state: Model, id: number, key?: string): Model => {
  if (key && ![` `, `Enter`].includes(key)) return state

  const { nextId } = state
  const meals = state.meals.filter(meal => meal.id !== id)

  const history = [
    ...state.history.slice(0, state.timeLine + 1),
    { meals, nextId },
  ]

  const timeLine = history.length - 1

  return { ...state, meals, history, timeLine }
}

const onEditMeal = (state: Model, editId: number, key?: string): Model => {
  if (key && ![` `, `Enter`].includes(key)) return state

  const meal = state.meals.find(item => item.id === editId)

  if (!meal) return state

  const { description, calories } = meal

  return {
    ...state,
    editId,
    description,
    calories,
    showForm: true,
  }
}

const onUndo = (state: Model, key?: string): Model => {
  if (key && ![` `, `Enter`].includes(key)) return state
  if (!state.timeLine) return state

  const timeLine = state.timeLine - 1
  const { meals, nextId } = state.history[timeLine]

  return { ...state, meals, timeLine, nextId }
}

const onRedo = (state: Model, key?: string): Model => {
  if (key && ![` `, `Enter`].includes(key)) return state
  if (state.history.length === 0) return state
  if (state.timeLine === state.history.length - 1) return state

  const timeLine = state.timeLine + 1
  const { meals, nextId } = state.history[timeLine]

  return { ...state, meals, timeLine, nextId }
}

const onAddData = (state: Model, data: Data): Model => {
  const nextId = data.meals.length + 1
  const snapShot = { ...data, nextId }
  const history = [...state.history, snapShot]

  return { ...state, ...data, history, nextId }
}

export const reducer = (state: Model, action: Action): Model => {
  switch (action.type) {
    case MSG.SHOW_FORM:
      return {
        ...state,
        showForm: action.showForm,
        description: ``,
        calories: 0,
        editId: undefined,
        saveButton: `Save`,
      }

    case MSG.MEAL_INPUT:
      return { ...state, description: action.description, saveButton: `Save` }

    case MSG.CALORIES_INPUT:
      return onCaloriesInput(state, action.calories)

    case MSG.SAVE_MEAL:
      return state.editId ? onSaveEditedMeal(state) : onSaveNewMeal(state)

    case MSG.DELETE_MEAL:
      return onDeleteMeal(state, action.id, action.key)

    case MSG.EDIT_MEAL:
      return onEditMeal(state, action.editId, action.key)

    case MSG.UNDO:
      return onUndo(state, action.key)

    case MSG.REDO:
      return onRedo(state, action.key)

    case MSG.ADD_DATA:
      return onAddData(state, action.data)

    default: {
      const unHandledAction: never = action // catches unused valid action type
      const { type } = unHandledAction

      return assertError(`Unhandled action type: ${type as string}`)
    }
  }
}
