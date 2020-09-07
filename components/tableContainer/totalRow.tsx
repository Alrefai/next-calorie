import type { Meal } from '../../types'

const totalCell = (item: string, i: number): JSX.Element => (
  <td key={`total-table-cell-${i}`} className='f5 pa2'>
    {item}
  </td>
)

type Props = { readonly meals: readonly Meal[] }

const TotalCells = ({ meals }: Props): JSX.Element => {
  const total = meals
    .map(meal => meal.calories)
    .reduce((a, b) => a + b)
    .toString()

  const cells = [total, ``, ``].map((item, i) => totalCell(item, i))

  return <>{cells}</>
}

export const TotalRow = ({ meals }: Props): JSX.Element => (
  <tr>
    <td className='f5 b tr pa2'>Total:</td>
    <TotalCells {...{ meals }} />
  </tr>
)
