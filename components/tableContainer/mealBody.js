import { pipe, map, append } from 'ramda'
import { MealRow, TotalRow } from './'

export const MealBody = ({ dispatch, fields, meals }) => pipe(
  map(row => <MealRow key={`MR`+row.id} {...{ dispatch, fields, row }} />),
  append(<TotalRow key={`TR`} {...{ meals }} />),
  body => <tbody>{body}</tbody>
)(meals)
