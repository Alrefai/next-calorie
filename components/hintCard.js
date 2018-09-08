import h from 'react-hyperscript'
import hh from 'hyperscript-helpers'
import data from '../data'
import { addDataAction } from '../actions'
import { hintText } from '../constants'

const { div, i, span, p, button } = hh(h)

const HintCard = ({ dispatch }) => div(
  {
    className: `
    flex flex-column flex-row-ns flex-wrap flex-nowrap-ns tc tl-ns br2 mv4
    bg-mid-gray pa0
    `,
  },
  [
    i({ className: `far fa-lightbulb ma3 f2 f1-ns self-center` }),
    p({ className: `flex-grow-1 lh-copy ma0 ph2 pb3 pa2-ns pl2-ns` }, hintText),
    button(
      {
        className: `
        bg-near-white mid-gray bn br2 br--bottom br2-ns br--right-ns pa3 ma0
        flex-shrink-0
        `,
        onClick: () => dispatch(addDataAction(data)),
      },
      `Data Sample`
    )
  ]
)

export default HintCard
