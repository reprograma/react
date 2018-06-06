import React from 'react'
import logo from './logo.png'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

// const props = {
//     usuario: {usuario: true},
//     onSairClick: () => {}
// }

function Navbar(props) {
    function handleLoginOuSair() {
        if (props.usuario) {
            props.onSairClick()
        }
    }

    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar-logo" src={logo} alt="Logo" />
            </Link>

            <ul className="navbar-links">
                <li>
                    <NavLink to="/quem-somos" activeClassName="navbar-links__ativo">
                        Quem somos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contato" activeClassName="navbar-links__ativo">
                        Contato
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/login" 
                        activeClassName="navbar-links__ativo"
                        onClick={handleLoginOuSair}
                    >
                        {props.usuario ? 'Sair' : 'Login'}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar