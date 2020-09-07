export const meta = {
  title: `Calories Counter`,
  description:
    `Calories Counter (demo) – a single page React app built with ` +
    `Next.js, TypeScript, Font Awesome, and Tachyons.`,
}

export type Meal = {
  readonly id: number
  readonly description: string
  readonly calories: number
}

export type Data = { readonly meals: readonly Meal[] }
type History = Data & { readonly nextId: number }

export type Model = Data & {
  readonly description: string
  readonly calories: number
  readonly showForm: boolean
  readonly nextId: number
  readonly editId?: number
  readonly saveButton: string
  readonly history: readonly History[]
  readonly timeLine: number
}

export const model: Model = {
  description: ``,
  calories: 0,
  showForm: false,
  nextId: 1,
  editId: undefined,
  saveButton: `Save`,
  meals: [],
  history: [],
  timeLine: 0,
}

export const saveButton = `Fill in all input fields`

export const hintText =
  `Start by clicking 'Add Meal' button. Or, click the ` +
  `'Data Sample' button to add sample meals.`
