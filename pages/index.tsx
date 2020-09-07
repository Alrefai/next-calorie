import { Header } from '../components/header'
import { Form } from '../components/form'
import { Table } from '../components/table'
import { StoreProvider } from '../context'

const Index = (): JSX.Element => (
  <div className='mh2'>
    <Header />
    <StoreProvider>
      <Form />
      <Table />
    </StoreProvider>
  </div>
)

export default Index
