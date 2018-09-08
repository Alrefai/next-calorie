import { map } from 'ramda'
import { saveButton } from '../constants'

const edit = (model) => {
  const { nextId, editId, description, calories, timeLine } = model
  if (!description || !calories) return { ...model, saveButton }
  const meals = map(meal => {
    if (meal.id === editId) return { ...meal, description, calories }
    return meal
  }, model.meals)
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
