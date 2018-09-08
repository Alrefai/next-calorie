import { pipe, defaultTo, filter, find } from 'ramda'
import add from './add'
import edit from './edit'
import { ACTIONS } from '../actions'

const reducer = (model, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_FORM: {
      const { showForm } = action
      return {
        ...model,
        showForm,
        description: ``,
        calories: 0,
        editId: null,
        saveButton: `Save`,
      }
    }
    case ACTIONS.MEAL_INPUT: {
      const { description } = action
      return { ...model, description, saveButton: `Save` }
    }
    case ACTIONS.CALORIES_INPUT: {
      const calories = pipe(
        parseInt,
        defaultTo(0)
      )(action.calories)
      return { ...model, calories, saveButton: `Save` }
    }
    case ACTIONS.SAVE_MEAL: {
      const { editId } = model
      const updatedModel = editId ? edit(model) : add(model)
      return updatedModel
    }
    case ACTIONS.DELETE_MEAL: {
      const { id } = action
      const { nextId } = model
      const meals = filter(meal => meal.id !== id, model.meals)
      const history = [
        ...model.history.slice(0, model.timeLine + 1), { meals, nextId }
      ]
      const timeLine = history.length - 1
      return { ...model,  meals, history, timeLine }
    }
    case ACTIONS.EDIT_MEAL: {
      const { editId } = action
      const meal = find(meal => meal.id === editId, model.meals)
      const { description, calories } = meal
      return {
        ...model,
        editId,
        description,
        calories,
        showForm: true,
      }
    }
    case ACTIONS.UNDO: {
      if (!model.timeLine) return model
      const timeLine = model.timeLine - 1
      const { meals, nextId } = model.history[timeLine]
      return { ...model, meals, timeLine, nextId }
    }
    case ACTIONS.REDO: {
      if (!model.history.length) return model
      if (model.timeLine === model.history.length - 1) return model
      const timeLine = model.timeLine + 1
      const { meals, nextId } = model.history[timeLine]
      return { ...model, meals, timeLine, nextId }
    }
    case ACTIONS.ADD_DATA: {
      const { data } = action
      const nextId = data.meals.length + 1
      const snapShot = { ...data, nextId }
      const history = [...model.history, snapShot]
      return { ...model, ...data, history, nextId }
    }
    default:
      return model
  }
}

export default reducer
