import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import loading from './loading.svg'
import * as apiPostit from '../../apis/postits'
import './Home.css'


class Home extends React.Component {
    state = {
        postits: [],
        carregando: true
    }

    componentDidMount() {
        apiPostit.getPostits()
            .then(response => {
                this.setState({
                    postits: response.data.postits,
                    carregando: false
                })
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.erro)
                }
            })
    }

    adicionaPostit = (novoPostit) => {
        apiPostit.postPostit(novoPostit)
            .then(response => {
                this.setState(prevState => {
                    novoPostit.id = response.data.id
        
                    return {
                        postits: prevState.postits.concat(novoPostit)
                    }
                })
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.erro)
                }
            })
    }

    editaPostits = (postitAlterado) => {
        apiPostit.putPostit(postitAlterado)
            .then(response => {
                this.setState(prevState => {
                    return {
                        postits: prevState.postits.map(
                            postitAtual => {
                                if (postitAtual.id === postitAlterado.id) {
                                    return postitAlterado
                                } else {
                                    return postitAtual
                                }
                            }
                        )
                    }
                })
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.erro)
                }
            })
    }


    removePostit = (idPostitRemovido) => {
        apiPostit.deletePostit(idPostitRemovido)
            .then(response => {
                this.setState(prevState => {
                    return {
                        postits: prevState.postits.filter(
                            postit => postit.id !== idPostitRemovido
                        )
                    }
                })
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.erro)
                }
            })
    }

    render() {
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
                        this.state.postits.map(postit => (
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