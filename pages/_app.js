import App, {Container} from 'next/app'
import h from 'react-hyperscript'
import Head from '../components/head'
import reducer from '../reducers'
import { initModel, theme } from '../constants'

class MyApp extends App {
  state = reducer(initModel, {})
  dispatch = (action) => this.setState(prevState => reducer(prevState, action))

  render() {
    const { Component } = this.props
    return h(Container, [
      h(Head, { title: `Calories Counter` }),
      h(Component, { model: this.state, dispatch: this.dispatch, }),
      <style jsx global>{theme}</style>,
    ])
  }
}

export default MyApp
