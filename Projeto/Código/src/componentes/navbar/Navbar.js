import React from 'react'
import Botao from '../formulario/botao/Botao'
import logo from './logo.png'
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
                    <a>Quem somos</a>
                </li>
                <li>
                    <a>
                        <Botao cor="vermelho">Contato</Botao>
                    </a>
                </li>
                <li>
                    <a onClick={handleClick}>
                        {props.usuario ? 'Sair' : 'Login'}
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar