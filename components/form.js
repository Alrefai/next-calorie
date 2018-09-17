import {
  ButtonSet, MealFieldSet, CaloriesFieldSet, UndoRedoSet
} from './formContainer'
import { saveMealAction, showFormAction } from '../actions'
import { Button } from './button'

const FormSet = ({
  dispatch,
  model: { description, calories, saveButton }
}) => (
  <form
    className={`f4 mv2 pv2 w-100`}
    onSubmit={e => {
      e.preventDefault()
      dispatch(saveMealAction)
    }}
  >
    <div className={`flex flex-nowrap mb3`}>
      <MealFieldSet dispatch={dispatch} value={description} />
      <CaloriesFieldSet dispatch={dispatch} value={calories} />
    </div>
    <ButtonSet dispatch={dispatch} text={saveButton} />
  </form>
)

const FormActionSet = ({ dispatch }) => (
  <div className={`flex flex-nowrap justify-between items-center`}>
    <Button
      text={`Add Meal`}
      className={`w-50 bn mv2 br3`}
      onClick={() => dispatch(showFormAction(true))}
    />
    <UndoRedoSet dispatch={dispatch} />
  </div>
)

const Form = ({ dispatch, model }) => {
  const { showForm } = model
  if (showForm) return <FormSet dispatch={dispatch} model={model} />
  return <FormActionSet dispatch={dispatch} />
}

export default Form
