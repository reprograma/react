import React from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Grupo from '../../componentes/Formulario/Grupo/Grupo'
import Botao from '../../componentes/Formulario/Botao/Botao'
import Link from '../../componentes/Formulario/Link/Link'
import * as apiLogin from '../../apis/usuarios'
import './Login.css'


// const props = {
//     historico: {},
//     onEnviarClick: () => {
//         // faz alguma coisa
//     }
// }

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: {
                valor: '',
                erro: ''
            },
            senha: {
                valor: '',
                erro: ''
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const usuario = {
            email: this.state.email.valor,
            senha: this.state.senha.valor
        }

        const estaDesabilitado = this.estaDesabilitado()

        if (!estaDesabilitado) {
            apiLogin.postUsuario(usuario)
                .then(response => {
                    this.props.onEnviarClick(response.data.usuario)
                    this.props.historico.push('/')
                })
                .catch(error => {
                    if (error.response) {
                        alert(error.response.data.erro)
                    }
                })
        }
        
    }

    handleChange = (nomeDoInput, valorDoInput, erro = '') => {
        this.setState({
            [nomeDoInput]: {
                valor: valorDoInput,
                erro: erro
            }
        })
    }

    estaDesabilitado() {
        return !this.state.email.valor ||
                this.state.email.erro ||
               !this.state.senha.valor ||
                this.state.senha.erro
    }

    render() {
        const estaDesabilitado = this.estaDesabilitado()

        return (
            <div className="login">
                <Formulario 
                    titulo="Login" 
                    texto="Entre com seu email e senha."
                    onSubmit={this.handleSubmit}
                >
                    <Grupo erro={this.state.email.erro}>
                        <Grupo.Legenda htmlFor="email">
                            Email:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Email"
                            autoComplete="email"
                            required={true}
                            onChange={this.handleChange} 
                        />
                    </Grupo>

                    <Grupo erro={this.state.senha.erro}>
                        <Grupo.Legenda htmlFor="senha">
                            Senha:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id="senha" 
                            name="senha" 
                            type="password" 
                            placeholder="Senha"
                            autoComplete="current-password"
                            minLength={6}
                            required={true}
                            onChange={this.handleChange} 
                        />
                    </Grupo>

                    <Botao desabilitado={estaDesabilitado}>
                        Enviar
                    </Botao>

                    <Link to="/conta">
                        Criar uma conta
                    </Link>
                </Formulario>
            </div>
        )
    }
}

export default Login