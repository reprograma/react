import React from 'react'
import Navbar from './containers/NavbarConnected'
import Home from './containers/HomeConnected'
import Login from './containers/LoginConnected'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import { Route, Switch } from 'react-router-dom'
import './App.css'


function App(props) {
  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/conta" component={Conta} />
        <Route path="/contato" component={Contato} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  );
}

export default App