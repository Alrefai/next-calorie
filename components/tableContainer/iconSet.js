import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons'
import { pipe, partial, curry, map, append, __, addIndex } from 'ramda'
import { deleteMealAction, editMealAction } from '../../actions'

const deleteIcon = (dispatch, id) => (
  <FontAwesomeIcon
    icon={faTrashAlt}
    fixedWidth
    key={`fa-trash-alt`}
    className={`pointer`}
    onClick={() => dispatch(deleteMealAction(id))}
  />
)

const editIcon = (dispatch, id) => (
  <FontAwesomeIcon
    icon={faEdit}
    fixedWidth
    key={`fa-edit`}
    className={`pointer`}
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
