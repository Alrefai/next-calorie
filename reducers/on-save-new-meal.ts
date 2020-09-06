import { saveButton } from '../constants'

export const add = model => {
  const { description, calories, timeLine } = model

  if (!description || !calories) return { ...model, saveButton }

  const meal = { id: model.nextId, description, calories }
  const meals = [...model.meals, meal]
  const nextId = model.nextId + 1
  const history = [...model.history.slice(0, timeLine + 1), { meals, nextId }]

  return {
    ...model,
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
