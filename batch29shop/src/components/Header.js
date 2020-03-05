import React, {Component} from 'react'

import {
    Link
} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <header className="App-header">
                <h1>Batch 29 Shop</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header;