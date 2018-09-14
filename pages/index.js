import h from 'react-hyperscript'
import hh from 'hyperscript-helpers'
import Header from '../components/header'
import Form from '../components/form'
import Table from '../components/table'

const { div, pre } = hh(h)

const Index = ({ dispatch, model }) => div({ className: `mh2` }, [
  h(Header),
  h(Form, { dispatch, model }),
  h(Table, { dispatch, model }),
  // pre({ className: `f5` }, JSON.stringify(model, null, 2)), //for debugging
])

export default Index
