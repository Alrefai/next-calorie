import type { Model } from '../types'
import {
  saveMealAction,
  showFormAction,
  mealInputAction,
  caloriesInputAction,
} from '../actions'
import { useModel, useEvent } from '../context'
import { Button } from './button'
import {
  ButtonSet,
  MealFieldSet,
  CaloriesFieldSet,
  UndoRedoSet,
} from './formContainer'

type PickProps = `description` | `calories` | `saveButton`
type Props = Pick<Model, PickProps>

const FormSet = ({ description, calories, saveButton }: Props): JSX.Element => {
  const { onSubmit, onClick } = useEvent({
    handleSubmit: saveMealAction,
    handleClick: () => showFormAction(false),
  })

  const { onChange: handleMealChange } = useEvent({
    handleChange: mealInputAction,
  })

  const { onChange: handleCaloriesChange } = useEvent({
    handleChange: caloriesInputAction,
  })

  return (
    <form {...{ onSubmit, className: `f4 mv2 pv2 w-100` }}>
      <div className='flex flex-nowrap mb3'>
        <MealFieldSet onChange={handleMealChange} value={description} />
        <CaloriesFieldSet onChange={handleCaloriesChange} value={calories} />
      </div>
      <ButtonSet {...{ onClick, text: saveButton }} />
    </form>
  )
}

const FormActionSet = (): JSX.Element => {
  const { onClick } = useEvent({ handleClick: () => showFormAction(true) })

  return (
    <div className='flex flex-nowrap justify-between items-center'>
      <Button
        text='Add Meal'
        className='w-50 ba b--near-white mv2 br3'
        {...{ onClick }}
      />
      <UndoRedoSet />
    </div>
  )
}

export const Form = (): JSX.Element => {
  const { showForm, description, calories, saveButton } = useModel()

  return showForm ? (
    <FormSet {...{ description, calories, saveButton }} />
  ) : (
    <FormActionSet />
  )
}
