import App, {Container} from 'next/app'
import Head from '../components/head'
import reducer from '../reducers'
import { initModel } from '../constants'
import 'tachyons/css/tachyons.min.css'
import 'modern-normalize/modern-normalize.css'

class MyApp extends App {

  state = reducer(initModel, {})
  dispatch = action => this.setState(prevState => reducer(prevState, action))

  render() {
    const { Component } = this.props
    return (
      <Container>
        <Head title={`Calories Counter`} />
        <Component model={this.state} dispatch={this.dispatch} />
        <style jsx global>{`
          body {
            background: black;
            color: #F4F4F4;
            max-width: 32rem;
            margin-right: auto;
            margin-left: auto;
          }
        `}</style>
      </Container>
    )
  }
}

export default MyApp
