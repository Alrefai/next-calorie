export const TYPES = {
  CLASS: {
    PRIMARY: `ba bg-near-white b--near-white`,
    SECONDARY: `ba bg-black near-white b--near-white`,
  },
  STYLE: {
    BBLR: { borderBottomLeftRadius: `.5rem` },
    BBRR: { borderBottomRightRadius: `.5rem` },
  },
}

export const Button = ({
  text,
  className = ``,
  buttonType = TYPES.CLASS.PRIMARY,
  ...props
}) => (
  <button
    type='button'
    className={`${className} ${buttonType} f5 pa2`}
    {...props}
  >
    {text}
  </button>
)
