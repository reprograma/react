import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'
import './Navbar.css'


// const props = {
//     usuario: true,
//     onSairClick () => {}
// }

function Navbar(props) {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="Logo" />
            </Link>

            <Menu usuario={props.usuario} onSairClick={props.onSairClick} />
        </nav>
    )
}

export default Navbar