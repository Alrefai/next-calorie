import App, {Container} from 'next/app'
import h from 'react-hyperscript'
import Head from '../components/head'
import reducer from '../reducers'
import { initModel } from '../constants'
import '../node_modules/modern-normalize/modern-normalize.css'
import '../node_modules/tachyons/css/tachyons.css'

class MyApp extends App {
  state = reducer(initModel, {})
  dispatch = (action) => this.setState(prevState => reducer(prevState, action))

  render() {
    const { Component } = this.props
    return h(Container, [
      h(Head, { title: `Calories Counter` }),
      h(Component, { model: this.state, dispatch: this.dispatch, }),
      <style jsx global>{`
        body {
          background: black;
          color: #F4F4F4;
          max-width: 32rem;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>,
    ])
  }
}

export default MyApp
