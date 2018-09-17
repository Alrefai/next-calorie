import { pipe, partial, curry, map, __, concat, addIndex } from 'ramda'
import { IconSet } from './iconSet'

const bodyCell = curry((id, item, i) => (
  <td
    key={`td`+id+`-`+i}
    className={`w-30 f5 pv3 ph2 bb b--near-white`}
  >
    {item}
  </td>
))

export const MealRow = ({ dispatch, fields, row }) => pipe(
  map(field => row[field]),
  partial(addIndex(map), [bodyCell(row.id)]),
  concat(__, [
    <IconSet key={`IS`+row.id} dispatch={dispatch} mealId={row.id} />
  ]),
  cells => <tr key={`trb`+row.id}>{cells}</tr>
)(fields)
