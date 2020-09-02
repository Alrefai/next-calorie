import { HintCard } from './hintCard'
import { MealHeader, MealBody } from './tableContainer'

export const Table = ({ dispatch, model: { meals } }) =>
  meals.length === 0 ? (
    <HintCard {...{ dispatch }} />
  ) : (
    <table className='f4 mv2 w-100 collapse'>
      <MealHeader titles={[`Meal`, `Calories`]} />
      <MealBody {...{ dispatch, meals }} fields={[`description`, `calories`]} />
    </table>
  )
