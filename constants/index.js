export const initModel = {
  description: ``,
  calories: 0,
  showForm: false,
  nextId: 1,
  editId: null,
  saveButton: `Save`,
  meals: [],
  history: [],
  timeLine: 0,
}

export const theme = `
/* common styles shared through the application */
body {
  background: black;
  color: #F4F4F4;
  font-family: sans-serif;
  margin: 0.5rem;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  // box-sizing: border-box;
  // line-height: 1.2;
  // overflow-x: hidden;
}
`

export const saveButton = `Fill in all input fields`

export const hintText = `Start by clicking 'Add Meal' button. Or, click the `
  + `'Data Sample' button to add sample meals.`
