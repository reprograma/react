import React from 'react'
import Formulario from '../../componentes/formulario/Formulario'
import './Login.css'

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <Formulario titulo="Login" texto="Entre com seu email e senha.">
                    <Formulario.Grupo>
                        <Formulario.Grupo.Legenda htmlFor="email">
                            Email:
                        </Formulario.Grupo.Legenda>
                        <Formulario.Grupo.CaixaTexto 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Email"
                            onChange={this.handleChange} />
                    </Formulario.Grupo>

                    <Formulario.Grupo>
                        <Formulario.Grupo.Legenda htmlFor="senha">
                            Senha:
                        </Formulario.Grupo.Legenda>
                        <Formulario.Grupo.CaixaTexto 
                            id="senha" 
                            name="senha" 
                            type="password" 
                            placeholder="senha"
                            onChange={this.handleChange} />
                    </Formulario.Grupo>

                    <Formulario.Botao desabilitado>
                        Enviar
                    </Formulario.Botao>

                    <Formulario.Link onLinkClick>
                        Criar uma conta
                    </Formulario.Link>
                </Formulario>
            </div>
        )
    }
}

export default Login