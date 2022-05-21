import React, { Component } from 'react'
import Nav from "./Nav"
import Banner from './Banner'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Banner/>
      </div>
    )
  }
}
