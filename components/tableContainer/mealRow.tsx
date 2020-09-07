import type { Meal } from '../../types'
import { IconSet } from './iconSet'

const bodyCell = (
  id: number,
  item: string | number,
  i: number,
): JSX.Element => (
  <td
    key={`body-table-cell-${id}-${i}`}
    className='w-30 f5 pv3 ph2 bb b--near-white'
  >
    {item}
  </td>
)

const fields: readonly (keyof Meal)[] = [`description`, `calories`]

type Props = { readonly row: Meal }

const MealCells = ({ row }: Props): JSX.Element => {
  const fieldSet = fields
    .map(field => row[field])
    .map((item, i) => bodyCell(row.id, item, i))

  return <>{fieldSet}</>
}

export const MealRow = ({ row }: Props): JSX.Element => (
  <tr>
    <MealCells {...{ row }} />
    <IconSet id={row.id} />
  </tr>
)
