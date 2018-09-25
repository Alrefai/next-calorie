import App, {Container} from 'next/app'
import { library as fontawesome } from '@fortawesome/fontawesome-svg-core'
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons'
import {
  faLightbulb, faEdit, faTrashAlt
} from '@fortawesome/free-regular-svg-icons'
import Head from '../components/head'
import reducer from '../reducers'
import { initModel } from '../constants'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'tachyons/css/tachyons.min.css'
import 'modern-normalize/modern-normalize.css' //keep it the last import

class MyApp extends App {
  state = reducer(initModel, {})
  dispatch = action => this.setState(prevState => reducer(prevState, action))

  render() {
    fontawesome.add(faUndo, faRedo, faLightbulb, faTrashAlt, faEdit)
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
