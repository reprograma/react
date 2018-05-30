import React from 'react'
import Navbar from './componentes/navbar/Navbar'
import FormularioLogin from './componentes/formulario/login/Login'
// import Botao from './componentes/formulario/botao/Botao'
import './App.css'


// O app é como se fosse o body do HTML
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { usuario: false }

    this.logaUsuario = this.logaUsuario.bind(this)
    this.deslogaUsuario = this.deslogaUsuario.bind(this)
  }

  logaUsuario() {
    this.setState({ usuario: true })
  }

  deslogaUsuario() {
    this.setState({ usuario: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          usuario={this.state.usuario} 
          logaUsuario={this.logaUsuario} 
          deslogaUsuario={this.deslogaUsuario}
        />

        <FormularioLogin />

        {/* <Botao>
          Botao dentro do app
        </Botao> */}
      </div>
    );
  }
}

export default App