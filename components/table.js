import HintCard from './hintCard'
import { MealHeader, MealBody } from './tableContainer'

const Table = ({ dispatch, model }) => {
  const { meals } = model
  if (!meals.length) return <HintCard dispatch={dispatch} />
  return (
    <table className={`f4 mv2 w-100 collapse`}>
      <MealHeader titles={[`Meal`, `Calories`]} />
      <MealBody
        dispatch={dispatch} fields={[`description`, `calories`]} rows={meals}
      />
    </table>
  )
}

export default Table
