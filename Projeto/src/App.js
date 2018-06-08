import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      usuario: JSON.parse(localStorage.getItem('usuario'))
    }

    this.logaUsuario = this.logaUsuario.bind(this)
    this.deslogaUsuario = this.deslogaUsuario.bind(this)
  }

  logaUsuario() {
    this.setState({ usuario: true })
  }

  deslogaUsuario() {
    localStorage.removeItem('usuario')
    this.setState({ usuario: false })
  }

  render() {
    return (
      <div className="app">
        <Navbar 
          usuario={this.state.usuario}
          onSairClick={this.deslogaUsuario}
        />

        <Switch>
          <Route exact path="/" render={props => (
            this.state.usuario ? <Home /> : <Redirect to="/login" />
          )} />

          <Route path="/login" render={props => (
            <Login 
              onEnviarClick={this.logaUsuario} 
              historico={props.history} 
            />
          )} />
          
          <Route path="/conta" component={Conta} />
          <Route path="/contato" component={Contato} />
          <Route path="/quem-somos" component={QuemSomos} />
          <Route component={NaoEncontrada} />
        </Switch>
      </div>
    );
  }
}

export default App