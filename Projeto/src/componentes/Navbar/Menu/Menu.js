import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

// const props = {
//     onSairClick: () => {}
// }

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {aberto: false}
    }
    
    handleAbreOuFecha = e => {
        this.setState(stateAnterior => {
            const proximoState = {
                aberto: !stateAnterior.aberto
            }
            
            return proximoState
        })
    }

    handleLoginOuSair = e => {
        if (this.props.usuario) {
            this.props.onSairClick()
        }
    }

    render() {
        let classesDoBotao = 'navbar-menu__botao'
        let classesDosOpcoes = 'navbar-menu__opcoes'

        if (this.state.aberto) {
            classesDoBotao += ' navbar-menu__botao--aberto'
            classesDosOpcoes += ' navbar-menu__opcoes--aberto'
        }

        return (
            <nav className="navbar-menu">
                <a className={classesDoBotao} onClick={this.handleAbreOuFecha}>
                    Menu
                </a>

                <ul className={classesDosOpcoes}>
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
                            onClick={this.handleLoginOuSair}
                        >
                            {this.props.usuario ? 'Sair' : 'Login'}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu