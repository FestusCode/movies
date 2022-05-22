import React, { Component } from 'react';
import '../CSS/Nav.css'

class Nav extends Component {
    render() {
        return (
            <div  className='nav_container'>
            <nav>
                <h1>HOOKED</h1>
                <div className="search_contener">
                    <input type="search" name="search_input" id="search_input" placeholder='Search...' />
                    <button>SEARCH</button>
                </div>
                </nav>
                </div>
        )
    }
}

export default Nav;