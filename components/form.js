import { saveMealAction, showFormAction } from '../actions'
import { Button } from './button'
import {
  ButtonSet,
  MealFieldSet,
  CaloriesFieldSet,
  UndoRedoSet,
} from './formContainer'

const FormSet = ({
  dispatch,
  model: { description, calories, saveButton },
}) => (
  <form
    className='f4 mv2 pv2 w-100'
    onSubmit={e => {
      e.preventDefault()
      dispatch(saveMealAction)
    }}
  >
    <div className='flex flex-nowrap mb3'>
      <MealFieldSet {...{ dispatch }} value={description} />
      <CaloriesFieldSet {...{ dispatch }} value={calories} />
    </div>
    <ButtonSet
      onClick={() => dispatch(showFormAction(false))}
      text={saveButton}
    />
  </form>
)

const FormActionSet = ({ dispatch }) => (
  <div className='flex flex-nowrap justify-between items-center'>
    <Button
      text='Add Meal'
      className='w-50 ba b--near-white mv2 br3'
      onClick={() => dispatch(showFormAction(true))}
    />
    <UndoRedoSet {...{ dispatch }} />
  </div>
)

export const Form = ({ dispatch, model }) =>
  model.showForm ? (
    <FormSet {...{ dispatch, model }} />
  ) : (
    <FormActionSet {...{ dispatch }} />
  )
