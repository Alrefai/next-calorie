import h from 'react-hyperscript'
import hh from 'hyperscript-helpers'
import {
  showFormAction,
  mealInputAction,
  caloriesInputAction,
  saveMealAction,
  undoAction,
  redoAction,
} from '../actions'

const { div, h1, button, form, label, input, i } = hh(h)

const buttonSet = (dispatch, saveButton) => div([
  button(
    {
      className: `w-70 f5 pv2 bg-near-white b--near-white`,
      style: { borderBottomLeftRadius: `8px`, },
      type: `submit`,
    },
    saveButton
  ),
  button(
    {
      className: `w-30 f5 pv2 bg-black near-white b--near-white`,
      style: { borderBottomRightRadius: `8px`, },
      type: `button`,
      onClick: () => dispatch(showFormAction(false)),
    },
    `Cancel`
  ),
])

const fieldSet = (labelText, inputValue, onChange) => div([
  label({ className: `db mb1 pv2` }, labelText),
  input({
    className: `f5 pv2 mb1 input-reset bn w-100 bg-black near-white`,
    type: `text`,
    value: inputValue,
    autoFocus: labelText === `Meal` ? `autoFocus` : ``,
    onChange,
    placeholder: `input...`,
    maxLength: labelText === `Meal` ? `10` : `4`,
  }),
])

const mealFieldSet = (dispatch, { description }) => div(
  { className: `fl w-70` },
  fieldSet(`Meal`, description, e => dispatch(
    mealInputAction(e.target.value)
  ))
)

const caloriesFieldSet = (dispatch, { calories }) => div(
   { className: `fl w-30 bl mb3 ph2` },
   fieldSet(`Calories`, calories || ``, e => dispatch(
    caloriesInputAction(e.target.value)
   ))
)

const Form = ({ dispatch, model }) => {
  const { description, calories, showForm, saveButton } = model
  if (showForm) return form(
    {
      className: `f4 mv2 pv2 w-100`,
      onSubmit: e => {
        e.preventDefault()
        dispatch(saveMealAction)
      }
    },
    [
      mealFieldSet(dispatch, model),
      caloriesFieldSet(dispatch, model),
      buttonSet(dispatch, saveButton),
    ]
  )
  const undoRedoButtonClass = `
    br3 bt bb bb--near-white bg-black near-white pv2 ph3 pointer
  `
  return div({ className: `flex flex-nowrap justify-between items-center` }, [
    button(
      {
        className: `f4 bg-near-white black bn br3 w-50 pa2 mv2`,
        onClick: () => dispatch(showFormAction(true)),
      },
      `Add Meal`
    ),
    div({ className: `f4` }, [
      i({
        className: `${undoRedoButtonClass} bl br--left fas fa-undo`,
        onClick: () => dispatch(undoAction),
      }),
      i({
        className: `${undoRedoButtonClass} br br--right fas fa-redo`,
        onClick: () => dispatch(redoAction),
      }),
    ])
  ])
}

export default Form
