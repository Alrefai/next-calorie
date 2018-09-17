import { pipe, partial, map, prepend, __, sum, addIndex } from 'ramda'

const totalCell = (item, i) => (
  <td key={`tdt`+i} className={`f5 pa2`}>{item}</td>
)

export const TotalRow = ({ rows }) => pipe(
  map(meal => meal.calories),
  sum,
  prepend(__, [``, ``]),
  partial(addIndex(map), [totalCell]),
  prepend(<td key={`tdtotal`} className={`f5 b tr pa2`}>Total:</td>),
  cells => <tr key={`trt`}>{cells}</tr>
)(rows)