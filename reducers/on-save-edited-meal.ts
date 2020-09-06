import { saveButton } from '../constants'

export const edit = model => {
  const { nextId, editId, description, calories, timeLine } = model

  if (!description || !calories) return { ...model, saveButton }

  const meals = model.meals.map(meal =>
    meal.id === editId ? { ...meal, description, calories } : meal,
  )

  const history = [...model.history.slice(0, timeLine + 1), { meals, nextId }]

  return {
    ...model,
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
