import type { Meal } from '../../types'
import { MealRow } from './mealRow'
import { TotalRow } from './totalRow'

type Props = { readonly meals: readonly Meal[] }

export const MealBody = ({ meals }: Props): JSX.Element => {
  const mealRow = meals.map(meal => (
    <MealRow key={`meal-row-${meal.id}`} row={meal} />
  ))

  return (
    <tbody>
      {mealRow}
      <TotalRow {...{ meals }} />
    </tbody>
  )
}
