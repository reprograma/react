import React from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Grupo from '../../componentes/Formulario/Grupo/Grupo'
import Botao from '../../componentes/Formulario/Botao/Botao'
import Link from '../../componentes/Formulario/Link/Link'
import './Conta.css'


class Conta extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: {
                valor: '',
                erro: ''
            },
            telefone: {
                valor: '',
                erro: ''
            },
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
            nome: this.state.nome.valor,
            telefone: this.state.telefone.valor,
            email: this.state.email.valor,
            senha: this.state.senha.valor
        }

        const estaDesabilitado = this.estaDesabilitado()

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

    estaDesabilitado() {
        return !this.state.nome.valor ||
                this.state.nome.erro ||
               !this.state.telefone.valor ||
                this.state.telefone.erro ||
               !this.state.email.valor ||
                this.state.email.erro ||
               !this.state.senha.valor ||
                this.state.senha.erro
    }

    render() {
        const estaDesabilitado = this.estaDesabilitado()

        return (
            <div className="conta">
                <Formulario 
                    titulo="Conta" 
                    texto="Envie o formulário para criar uma conta!"
                    onSubmit={this.handleSubmit}
                >
                    <Grupo erro={this.state.nome.erro}>
                        <Grupo.Legenda htmlFor="nome">
                            Nome:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id="nome" 
                            name="nome" 
                            type="text" 
                            placeholder="Nome"
                            required={true}
                            minLength={10}
                            onChange={this.handleChange} 
                        />
                    </Grupo>

                    <Grupo erro={this.state.telefone.erro}>
                        <Grupo.Legenda htmlFor="telefone">
                            Telefone:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id="telefone" 
                            name="telefone" 
                            type="text" 
                            placeholder="Telefone"
                            required={true}
                            onChange={this.handleChange} 
                        />
                    </Grupo>

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

                    <Botao desabilitado={estaDesabilitado}>
                        Enviar
                    </Botao>

                    <Link to="/login">
                        Fazer login
                    </Link>
                </Formulario>
            </div>
        )
    }
}

export default Conta