import React from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Grupo from '../../componentes/Formulario/Grupo/Grupo'
import Botao from '../../componentes/Formulario/Botao/Botao'
import Link from '../../componentes/Formulario/Link/Link'
import './Login.css'


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

        const estaDesabilitado = this.deveDesabilitaFormulario()

        if (!estaDesabilitado) {
            // TODO: enviar dados para a API
            console.log("usuario", usuario)
        }
        
    }

    handleChange = (nomeDoInput, valorDoInput, erro = '') => {
        // console.log('nomeDoInput: ', nomeDoInput)
        // console.log('valorDoInput: ', valorDoInput)
        // console.log('erro: ', erro)

        this.setState({
            [nomeDoInput]: {
                valor: valorDoInput,
                erro: erro
            }
        })
    }

    deveDesabilitaFormulario() {
        return !this.state.email.valor ||
                this.state.email.erro ||
               !this.state.senha.valor ||
                this.state.senha.erro
    }


    render() {
        const desabilitado = this.deveDesabilitaFormulario()

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
                            minLength={6}
                            required={true}
                            onChange={this.handleChange} 
                        />
                    </Grupo>

                    <Botao desabilitado={desabilitado}>
                        Enviar
                    </Botao>

                    <Link onLinkClick={()=> {}}>
                        Criar uma conta
                    </Link>
                </Formulario>
            </div>
        )
    }
}

export default Login