import { pipe, partial, map, __, concat, addIndex } from 'ramda'

const headCell = (item, i) => (
  <th key={`th`+i} className={`pa2 tl bb b-near-white`}>{item}</th>
)

export const MealHeader = ({ titles }) => pipe(
  concat(__, [``, ``]),
  partial(addIndex(map), [headCell]),
  cells => <tr key={`trh`}>{cells}</tr>,
  row => <thead>{row}</thead>
)(titles)
