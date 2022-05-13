import React from 'react'
import './intro/intro.css'
import { Link } from 'react-router-dom'

const NavBar = () =>{
    return(
        <div className="container">
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <h4>Counter<span>App...</span></h4>
                </Link>
            </div>
            <nav>
                <ul id="menuItems">
                    <li>
                        <Link to="/counter-one">counter one</Link>
                    </li>
                    <li>
                        <Link to="/counter-two">counter two</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default NavBar