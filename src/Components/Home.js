import React, { Component } from 'react'
import Footer from "./Footer"
import Banner from './Banner'
import Cards from './Cards'
import Nav from './Nav'
// import Footer from './Footer'

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
