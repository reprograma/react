import React from 'react'
import Grupo from '../Grupo/Grupo'
import Link from '../Link/Link'
import Botao from '../Botao/Botao'
import FaBeer from 'react-icons/lib/fa/beer';
import './Login.css'


class FormularioLogin extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { 
            nome: "",
            email: "",
            senha: "",
            erro: null
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        // enviar os dados para o Backend
        console.log("nome", this.state.nome)
        console.log("email", this.state.email)
        console.log("senha", this.state.senha)
    }

    handleChange(e) {
        const nomeDoInput = e.target.name;
        const valorDoInput = e.target.value;

        // validações do campo nome
        if (nomeDoInput === 'nome' && valorDoInput.trim() === '') {
            this.setState({ erro: { tipo: "nome", mensagem: "Este campo é obrigatório" }})
            return
        }

        if (nomeDoInput === 'nome' && valorDoInput.length < 10) {
            this.setState({
                erro: {
                    tipo: "nome", 
                    mensagem: "Digite pelo menos 10 caracteres"
                }
            })
            return
        }

        // validações do campo senha
        if (nomeDoInput === 'senha' && valorDoInput.trim() === '') {
            this.setState({
                erro: {
                    tipo: "senha", 
                    mensagem: "Este campo é obrigatório"
                }
            })
            return
        }

        if (nomeDoInput === 'senha' && valorDoInput.length < 6) {
            this.setState({
                erro: {
                    tipo: "senha",
                    mensagem: "Digite pelo menos 6 caracteres"
                }
            })
            return
        }

        this.setState({
            [nomeDoInput]: valorDoInput,
            erro: null
        })
    }

    handleClick(e) {
        e.preventDefault()
        console.log('Foi clicado no link criar uma conta')
    }

    estaDesabilitado() {
        return !this.state.nome||
               !this.state.email ||
               !this.state.senha
    }
    
    render() {
        return (
            <form className="formulario" onSubmit={this.handleSubmit}>
                <h1 className="formulario-titulo">
                    Formulário de usuário <FaBeer />
                </h1>

                <Grupo erro={this.state.email.erro}>
                    <Grupo.Legenda htmlFor="email">Email:</Grupo.Legenda>
                    <Grupo.CaixaTexto 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Email"
                        onChange={this.handleChange} />
                </Grupo>

                <Grupo erro={this.state.senha.erro}>
                    <Grupo.Legenda htmlFor="senha">Senha:</Grupo.Legenda>
                    <Grupo.CaixaTexto 
                        id="senha" 
                        name="senha" 
                        type="password" 
                        placeholder="senha"
                        onChange={this.handleChange} />
                </Grupo>

                <Botao desabilitado={this.estaDesabilitado()}>
                    Enviar
                </Botao>

                <Link onLinkClick={this.handleClick}>
                    Criar uma conta
                </Link>
            </form>
        )
    }
}

export default FormularioLogin