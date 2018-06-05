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

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(nomeDoInput, valorDoInput, erro = ''){
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


    render() {
        return (
            <div className="login">
                <Formulario titulo="Login" texto="Entre com seu email e senha.">
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

                    <Botao desabilitado={false}>
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