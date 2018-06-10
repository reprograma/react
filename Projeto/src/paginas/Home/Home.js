import React from 'react'
import { Redirect }  from 'react-router-dom'
import Postit from '../../componentes/Postit/Postit'
import loading from './loading.svg'
import './Home.css'


class Home extends React.Component {
    state = {
        carregando: true
    }

    componentDidMount() {
        console.log('componentDidMount props', this.props)
        this.props.onListaPostits()
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps nextProps', nextProps)

        this.setState({
            carregando: false
        })
    }

    adicionaPostit = (novoPostit) => {
        this.props.onAdicionaPostit(novoPostit)
    }

    editaPostits = (postitEditado) => {
        this.props.onEditaPotit(postitEditado)
    }

    removePostit = (idPostitRemovido) => {
        this.props.onRemovePostit(idPostitRemovido)
    }

    render() {
        if (!this.props.usuario) {
            return <Redirect to="/login" />
        }

        return (
            <div className="home">
                <Postit
                    onAdicionaPostitClick={this.adicionaPostit}
                    onEditaPostitClick={this.editaPostits}
                    onRemovePostitClick={this.removePostit}
                />
    
                <div>
                {
                    this.state.carregando ? (
                        <img 
                            className="home__loading" 
                            src={loading} 
                            alt="Carregando lista de postit" 
                        />
                    ) : (
                        this.props.postits.map(postit => (
                            <Postit 
                                key={postit.id}
                                id={postit.id}
                                titulo={postit.titulo}
                                texto={postit.texto}
                                onAdicionaPostitClick={this.adicionaPostit}
                                onEditaPostitClick={this.editaPostits}
                                onRemovePostitClick={this.removePostit}
                            />
                        ))
                    )
                }
                </div>
            </div>
        )
    }
}

export default Home