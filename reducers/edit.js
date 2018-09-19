import { saveButton } from '../constants'

const edit = model => {
  const { nextId, editId, description, calories, timeLine } = model
  if (!description || !calories) return { ...model, saveButton }
  const meals = model.meals.map(meal => {
    return meal.id === editId ? { ...meal, description, calories } : meal
  })
  const history = [...model.history.slice(0, timeLine + 1), { meals, nextId }]
  return {
    ...model,
    meals,
    history,
    timeLine: history.length - 1,
    description: ``,
    calories: 0,
    showForm: false,
    editId: null,
    saveButton: `Save`,
  }
}

export default edit
