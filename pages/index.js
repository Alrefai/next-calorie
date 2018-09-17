import Header from '../components/header'
import Form from '../components/form'
import Table from '../components/table'

const Index = ({ dispatch, model }) => (
  <div className={`mh2`}>
    <Header />
    <Form dispatch={dispatch} model={model} />
    <Table dispatch={dispatch} model={model} />
    {/* <pre className={`f5`}> */}
    {/*   {JSON.stringify(model, null, 2)} */}
    {/* </pre> */}
  </div>
)

export default Index
