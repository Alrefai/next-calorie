import { Button, TYPES } from '../button'

const { CLASS: { SECONDARY }, STYLE: { BBLR, BBRR } } = TYPES

export const ButtonSet = ({ onClick, text }) => (
  <div>
    <Button
      {...{ text }}
      className={
      `w-70 ${text !== `Save` ? `bg-dark-red near-white b--dark-red` : ``}`
      }
      style={BBLR}
    />
    <Button
      text={`Cancel`}
      type={`button`}
      buttonType={SECONDARY}
      className={`w-30 ${text !== `Save` ? `dark-red b--dark-red` : ``}`}
      style={BBRR}
      {...{ onClick }}
    />
  </div>
)
