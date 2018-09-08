import h from 'react-hyperscript'
import hh from 'hyperscript-helpers'

const { div, h1, h6 } = hh(h)

const Header = () =>  div(
  { className: `flex justify-between items-baseline mv2 pv2 bb` }, [
    h1({ className: `f2 mv0` }, `Calories Counter`),
    h6({ className: `f5 bg-green black br2 pa1 mv0 self-center` }, `Demo`)
  ]
)

export default Header
