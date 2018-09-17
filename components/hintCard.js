import data from '../data'
import { Button } from './button'
import { addDataAction } from '../actions'
import { hintText } from '../constants'

const HintCard = ({ dispatch }) => (
  <div className={`
    flex flex-column flex-row-reverse-ns flex-nowrap-ns tc tl-ns br2 mv4
    bg-mid-gray pa0
  `}>
    <i className={`far fa-lightbulb ma3 f2 f1-ns self-center`} />
    <p className={`flex-grow-1 lh-copy ma0 ph2 pb3 pl3-ns pv2-ns`}>
      {hintText}
    </p>
    <Button
      text={`Data Sample`}
      className={`
        mid-gray bn br2 br--bottom br2-ns br--left-ns pa3 ma0 flex-shrink-0
      `}
      onClick={() => dispatch(addDataAction(data))}
    />
  </div>
)

export default HintCard
