export const meta = {
  title: `Calories Counter`,
  description: `Calories Counter (demo) – a single page React app built with `
    + `Next.js and deployed to now.sh with Docker.`,
}
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

export const saveButton = `Fill in all input fields`

export const hintText = `Start by clicking 'Add Meal' button. Or, click the `
  + `'Data Sample' button to add sample meals.`
