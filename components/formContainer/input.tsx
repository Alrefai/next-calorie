type OmitProp = `children`
type OmitProps = OmitProp | `onChange`
type LabelElement = `label`
type InputElement = `input`
type Label = Omit<React.ComponentPropsWithoutRef<LabelElement>, OmitProps>
type Input = Omit<React.ComponentPropsWithoutRef<InputElement>, OmitProp>
type InputProps = Label & Input & { readonly label: string }

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  className,
}: InputProps): JSX.Element => (
  <div {...{ className }}>
    <label htmlFor={id} className='db mb1 pv2'>
      {label}
    </label>
    <input
      {...{ id, type, value, onChange }}
      placeholder='input...'
      maxLength={label === `Meal` ? 10 : 4}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={label === `Meal`}
      className='f5 pv2 mb1 input-reset bn w-100 bg-black near-white'
    />
  </div>
)

type PickProps = `onChange` | `value`
type FieldProps = Pick<Input, PickProps>

export const MealFieldSet = ({ onChange, value }: FieldProps): JSX.Element => (
  <InputField
    id='meal-input'
    label='Meal'
    className='w-70'
    {...{ value, onChange }}
  />
)

export const CaloriesFieldSet = ({
  onChange,
  value,
}: FieldProps): JSX.Element => (
  <InputField
    id='calories-input'
    label='Calories'
    className='w-30 bl ph2'
    value={value || ``}
    {...{ onChange }}
  />
)
