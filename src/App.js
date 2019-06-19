import React, { Component,Fragment } from 'react'
import Header from './common/header/index'
import { GlobalStyle } from './style'
import { GlobalIconfontStyle } from './statics/iconfont/iconfont'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconfontStyle/>
          <Header/>
      </Fragment>
    )
  }
}

