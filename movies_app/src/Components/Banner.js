import React, { Component } from 'react'
import '../CSS/Banner.css'
import searchIcon from "../Img/icons/searchIcon.png"

export default class Banner extends Component {
  render() {
    return (
      <div>
      <section>
            <h1>which movie are you looking for?</h1>
            <div id="search_input">
                <img src={searchIcon} alt="search icon" id='searchIcon' />
            <input type="search" name="search" id="search" placeholder='Search movies' />
            </div>
      </section>

      </div>
    )
  }
}
