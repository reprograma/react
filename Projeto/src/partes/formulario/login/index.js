import React from 'react'
import './login.css'


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
    }

    handleSubmit(e) {
        e.preventDefault()

        console.log("nome", this.state.nome)
        console.log("email", this.state.email)
        console.log("senha", this.state.senha)
    }

    handleChange(e) {
        const nomeDoInput = e.target.name;
        const valorDoInput = e.target.value;

        if (nomeDoInput === 'nome' && valorDoInput.trim() === '') {
            this.setState({ erro: { tipo: "nome", mensagem: "Este campo é obrigatório" }})
            return
        }

        if (nomeDoInput === 'nome' && valorDoInput.length < 10) {
            this.setState({ erro: { tipo: "nome", mensagem: "Digite pelo menos 10 caracteres" }})
            return
        }

        // if (nomeDoInput === 'senha' && valorDoInput.trim() === '') {
        //     this.setState({ erro: { tipo: "senha", mensagem: "Este campo é obrigatório" }})
        //     return
        // }

        // if (nomeDoInput === 'senha' && valorDoInput.length < 6) {
        //     this.setState({ erro: { tipo: "senha", mensagem: "Digite pelo menos 6 caracteres" }})
        //     return
        // }




        this.setState({
            [nomeDoInput]: valorDoInput,
            erro: null
         })
    }
    
    render() {
        return (
            <form className="formulario" onSubmit={this.handleSubmit}>
                <h1 className="formulario-titulo">Formulário de usuário</h1>

                <label className="formulario-legenda">Nome:</label>
                <input className="formulario-campo" type="text" name="nome" onChange={this.handleChange} />
                {this.state.erro && this.state.erro.tipo === 'nome' && (
                    <p className="erro">{this.state.erro.mensagem}</p>
                )}

                <label className="formulario-legenda">Email:</label>
                <input className="formulario-campo" type="email" name="email" onChange={this.handleChange} />
                {this.state.erro && this.state.erro.tipo === 'email' && (
                    <p className="erro">Este email é inválido</p>
                )}

                <label className="formulario-legenda">Senha:</label>
                <input className="formulario-campo" type="password" name="senha" onChange={this.handleChange} />
                {this.state.erro && this.state.erro.tipo === 'senha' && (
                    <p className="erro">{this.state.mensagem}</p>
                )}

                <button className="formulario-botao">Enviar</button>
            </form>
        )
    }
}

export default FormularioLogin