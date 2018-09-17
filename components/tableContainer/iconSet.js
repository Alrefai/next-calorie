import { pipe, partial, curry, map, append, __, addIndex } from 'ramda'
import { deleteMealAction, editMealAction } from '../../actions'

const deleteIcon = (dispatch, id) => (
  <i
    key={`fa-trash-alt`}
    className={`far fa-trash-alt pr1 pointer`}
    onClick={() => dispatch(deleteMealAction(id))}
  />
)

const editIcon = (dispatch, id) => (
  <i
    key={`fa-edit`}
    className={`far fa-edit pointer`}
    onClick={() => dispatch(editMealAction(id))}
  />
)

const iconCell = curry((id, item, i) => (
  <td key={`i`+id+`-`+i} className={`w-10 tr ph2 bb b-near-white`}>{item}</td>
))

export const IconSet = ({ dispatch, mealId }) => pipe(
  deleteIcon,
  append(__, []),
  append(editIcon(dispatch, mealId)),
  partial(addIndex(map), [iconCell(mealId)]),
)(dispatch, mealId)
