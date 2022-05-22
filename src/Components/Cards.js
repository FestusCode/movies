import React, { Component } from 'react'
// import movie_picture from '../Img/movieSample.jpg'
import '../CSS/Cards.css'


export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
        'X-RapidAPI-Key': 'cdffc489famsh76d9168b1f4f8a0p1b701ajsndc53e116e47d'
      }
    };
    const url = "https://online-movie-database.p.rapidapi.com/auto-complete?q=game";
    fetch(url, options)
      .then(response => response.json())
      .then(json => this.setState({ posts: json.d }))
  }
  render() {
    let { posts } = this.state;
    return (
      <section className='cards_container'>

        <div className='cards'>

          {posts.map((post) => (
            <div className="card" key={post.id}>
              <img src={post.i.imageUrl} alt="movies cover" />
              <h2>{post.l}</h2>
            </div>
            ))}
        </div>
      
      </section>
    )
  }
}
