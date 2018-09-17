import { pipe, map, append } from 'ramda'
import { MealRow, TotalRow } from './'

export const MealBody = ({ dispatch, fields, rows }) => pipe(
  map(row => (
    <MealRow key={`MR`+row.id} dispatch={dispatch} fields={fields} row={row} />
  )),
  append(<TotalRow key={`TR`} rows={rows} />),
  body => <tbody>{body}</tbody>
)(rows)
