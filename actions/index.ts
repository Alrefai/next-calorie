export const ACTIONS = {
  SHOW_FORM: `SHOW_FROM`,
  MEAL_INPUT: `MEAL_INPUT`,
  CALORIES_INPUT: `CALORIES_INPUT`,
  SAVE_MEAL: `SAVE_MEAL`,
  DELETE_MEAL: `DELETE_MEAL`,
  EDIT_MEAL: `EDIT_MEAL`,
  ADD_DATA: `ADD_DATA`,
  UNDO: `UNDO`,
  REDO: `REDO`,
}

export const showFormAction = showForm => ({
  type: ACTIONS.SHOW_FORM,
  showForm,
})

export const mealInputAction = description => ({
  type: ACTIONS.MEAL_INPUT,
  description,
})

export const caloriesInputAction = calories => ({
  type: ACTIONS.CALORIES_INPUT,
  calories,
})

export const saveMealAction = { type: ACTIONS.SAVE_MEAL }

export const deleteMealAction = id => ({
  type: ACTIONS.DELETE_MEAL,
  id,
})

export const editMealAction = editId => ({
  type: ACTIONS.EDIT_MEAL,
  editId,
})

export const addDataAction = data => ({
  type: ACTIONS.ADD_DATA,
  data,
})

export const undoAction = { type: ACTIONS.UNDO }

export const redoAction = { type: ACTIONS.REDO }
