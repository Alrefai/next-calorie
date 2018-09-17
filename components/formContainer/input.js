import { mealInputAction, caloriesInputAction } from '../../actions'

const InputField = ({ label, type, value, onChange, className }) => (
  <div className={className}>
    <label className={`db mb1 pv2`}>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={`input...`}
      maxLength={label === `Meal` ? `10` : `4`}
      autoFocus={label === `Meal` ? `autoFocus` : ``}
      className={`f5 pv2 mb1 input-reset bn w-100 bg-black near-white`}
    />
  </div>
)

export const MealFieldSet = ({ dispatch, value }) => (
  <InputField
    label={`Meal`}
    className={`w-70`}
    value={value}
    onChange={e => dispatch(mealInputAction(e.target.value))}
  />
)

export const CaloriesFieldSet = ({ dispatch, value }) => (
  <InputField
    label={`Calories`}
    className={`w-30 bl ph2`}
    value={value || ``}
    onChange={e => dispatch(caloriesInputAction(e.target.value))}
  />
)
