import { useModel } from '../context'
import { HintCard } from './hintCard'
import { MealHeader, MealBody } from './tableContainer'

export const Table = (): JSX.Element => {
  const { meals } = useModel()

  return meals.length === 0 ? (
    <HintCard />
  ) : (
    <table className='f4 mv2 w-100 collapse'>
      <MealHeader />
      <MealBody {...{ meals }} />
    </table>
  )
}
