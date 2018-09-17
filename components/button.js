export const TYPES = {
  CLASS: {
    PRIMARY: `bg-near-white b--near-white`,
    SECONDARY: `bg-black near-white b--near-white`,
  },
  STYLE: {
    BBLR: { borderBottomLeftRadius: `8px`  },
    BBRR: { borderBottomRightRadius: `8px` },
  },
}

export const Button = ({
  text,
  type,
  className,
  style,
  onClick,
  buttonType = TYPES.CLASS.PRIMARY,
}) => (
  <button
    type={type}
    className={`${className} ${buttonType} f5 pa2`}
    style={style}
    onClick={onClick}
  >
    {text}
  </button>
)
