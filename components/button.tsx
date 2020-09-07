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

type Element = `button`
type OmitProp = `children`

type Props = Omit<React.ComponentPropsWithoutRef<Element>, OmitProp> & {
  readonly text: string
  readonly buttonType?: string
}

export const Button = ({
  text,
  className = ``,
  buttonType = TYPES.CLASS.PRIMARY,
  ...props
}: Props): JSX.Element => (
  <button
    type='button'
    className={`${className} ${buttonType} f5 pa2`}
    {...props}
  >
    {text}
  </button>
)
