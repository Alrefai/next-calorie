const headCell = (item: string, i: number): JSX.Element => (
  <th key={`header-table-cell-${i}`} className='pa2 tl bb b-near-white'>
    {item}
  </th>
)

const titles = [`Meal`, `Calories`, ``, ``] as const

export const MealHeader = (): JSX.Element => (
  <thead>
    <tr>{titles.map((title, i) => headCell(title, i))}</tr>
  </thead>
)
