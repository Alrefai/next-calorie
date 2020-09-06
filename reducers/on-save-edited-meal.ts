import type { Model } from '../types'
import { saveButton } from '../constants'

export const onSaveEditedMeal = (state: Model): Model => {
  const { nextId, editId, description, calories, timeLine } = state

  if (!description || !calories) return { ...state, saveButton }

  const meals = state.meals.map(meal =>
    meal.id === editId ? { ...meal, description, calories } : meal,
  )

  const history = [...state.history.slice(0, timeLine + 1), { meals, nextId }]

  return {
    ...state,
    meals,
    history,
    timeLine: history.length - 1,
    description: ``,
    calories: 0,
    showForm: false,
    editId: undefined,
    saveButton: `Save`,
  }
}
