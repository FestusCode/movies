import React, { Component } from 'react'
import Nav from "./Nav"
import Banner from './Banner'
import Cards from './Cards'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Banner/>
        <Cards/>
        <Footer/>
      </div>
    )
  }
}
