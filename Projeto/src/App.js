import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncotrada'
import { Route, Switch } from 'react-router-dom'
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
        <Navbar usuario={this.state.usuario} logaUsuario={this.logaUsuario} deslogaUsuario={this.deslogaUsuario} />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/conta" component={Conta} />
          <Route component={NaoEncontrada} />
        </Switch>
      </div>
    );
  }
}

export default App