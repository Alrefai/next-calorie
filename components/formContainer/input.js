import { mealInputAction, caloriesInputAction } from '../../actions'

const InputField = ({ id, label, type, value, onChange, className }) => (
  <div {...{ className }}>
    <label htmlFor={id} className='db mb1 pv2'>
      {label}
    </label>
    <input
      {...{ id, type, value, onChange }}
      placeholder='input...'
      maxLength={label === `Meal` ? `10` : `4`}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={label === `Meal` ? `autoFocus` : ``}
      className='f5 pv2 mb1 input-reset bn w-100 bg-black near-white'
    />
  </div>
)

export const MealFieldSet = ({ dispatch, value }) => (
  <InputField
    id='meal-input'
    label='Meal'
    className='w-70'
    {...{ value }}
    onChange={e => dispatch(mealInputAction(e.target.value))}
  />
)

export const CaloriesFieldSet = ({ dispatch, value }) => (
  <InputField
    id='calories-input'
    label='Calories'
    className='w-30 bl ph2'
    value={value || ``}
    onChange={e => dispatch(caloriesInputAction(e.target.value))}
  />
)
