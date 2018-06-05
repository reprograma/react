import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar(props) {
    function handleClick(e) {
        e.preventDefault()

        if (props.usuario) {
            props.deslogaUsuario();
        } else {
            props.logaUsuario();
        }
    }

    return (
        <nav className="navbar">
            <img className="navbar-logo" src={logo} alt="Logo" />

            <ul className="navbar-links">
                <li>
                    <Link to="/quem-somos">Quem somos</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    <Link to={props.usuario ? '/login' : '/home'} onClick={handleClick}>
                        {props.usuario ? 'Sair' : 'Login'}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar