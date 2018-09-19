import { Button, TYPES } from '../button'
import { showFormAction } from '../../actions'

const { CLASS: { SECONDARY }, STYLE: { BBLR, BBRR } } = TYPES

export const ButtonSet = ({ dispatch, text }) => (
  <div>
    <Button
      {...{ text }}
      className={`
        w-70 ${text !== `Save` ? `bg-dark-red near-white b--dark-red` : ``}
      `}
      style={BBLR}
    />
    <Button
      text={`Cancel`}
      type={`button`}
      buttonType={SECONDARY}
      className={`w-30 ${text !== `Save` ? `dark-red b--dark-red` : ``}`}
      style={BBRR}
      onClick={() => dispatch(showFormAction(false))}
    />
  </div>
)
