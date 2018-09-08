import h from 'react-hyperscript'
import hh from 'hyperscript-helpers'
import {
  pipe, partial, curry, map, append, prepend, __, sum, concat,
} from 'ramda'
import HintCard from './hintCard'
import { deleteMealAction, editMealAction } from '../actions'

const { h1, div, td, th, tr, tbody, thead, table, i } = hh(h)

const mealHeader = pipe(
  concat(__, [``, ``]),
  map(partial(th, [{ className: `pa2 tl bb b-near-white` }])),
  tr,
  append(__, []),
  thead
)

const iconCell = partial(td, [{ className: `w-10 tr ph2 bb b-near-white` }])

const deleteIcon = (dispatch, id) => iconCell(i({
  className: `far fa-trash-alt pr1 pointer`,
  onClick: () => dispatch(deleteMealAction(id)),
}))

const editIcon = (dispatch, id) => iconCell(i({
  className: `far fa-edit pointer`,
  onClick: () => dispatch(editMealAction(id)),
}))

const mealRow = curry((dispatch, fields, row) => pipe(
  map(field => row[field]),
  map(partial(td, [{ className: `w-30 f5 pv3 ph2 bb b--near-white` }])),
  concat(__, [deleteIcon(dispatch, row.id), editIcon(dispatch, row.id)]),
  tr
)(fields))

const totalRow = pipe(
  map(meal => meal.calories),
  sum,
  prepend(__, [``, ``]),
  map(partial(td, [{ className: `f5 pa2` }])),
  prepend(td({ className: `f5 b tr pa2` }, `Total:`)),
  tr
)

const mealBody = curry((dispatch, fields, rows) => pipe(
  map(mealRow(dispatch, fields)),
  append(totalRow(rows)),
  tbody
)(rows))

const Table = ({ dispatch, model }) => {
  const { meals } = model
  if (!meals.length) return h(HintCard, { dispatch })
  return table({ className: `f4 mv2 w-100 collapse` }, [
    mealHeader([`Meal`, `Calories`]),
    mealBody(dispatch, [`description`, `calories`], meals),
  ])
}

export default Table
