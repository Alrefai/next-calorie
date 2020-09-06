import type { Model } from '../types'
import { saveButton } from '../constants'

export const onSaveNewMeal = (state: Model): Model => {
  const { description, calories, timeLine } = state

  if (!description || !calories) return { ...state, saveButton }

  const meal = { id: state.nextId, description, calories }
  const meals = [...state.meals, meal]
  const nextId = state.nextId + 1
  const history = [...state.history.slice(0, timeLine + 1), { meals, nextId }]

  return {
    ...state,
    meals,
    history,
    timeLine: history.length - 1,
    nextId,
    description: ``,
    calories: 0,
    showForm: false,
    saveButton: `Save`,
  }
}
