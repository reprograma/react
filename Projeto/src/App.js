import React from 'react';
import logo from './logo.svg';
import Navbar from './partes/navbar/navbar.js';
import FormularioLogin from './partes/formulario/login';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: false
    }
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

        <FormularioLogin usuario={this.state.usuario}/>

      </div>
    );
  }
}

export default App;
