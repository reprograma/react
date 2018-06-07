import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import loading from './loading.svg'
import './Home.css'


class Home extends React.Component {
    state = {
        postits: [],
        carregando: true
    }

    componentDidMount() {
        // TODO: buscar lista de postit
        const postits = [
            {
                id: "c2f27308-75c6-440b-bbf9-1a075c32200f",
                titulo: "Estuda HTML",
                texto: "Lorem Ipsum"
            },
            {
                id: "4627781c-bd04-41d5-8c97-3819d2a38fc1",
                titulo: "Estuda CSS",
                texto: "Lorem Ipsum"
            },
            {
                id: "04b9dd92-71a6-46bc-9e63-df5112d3fa71",
                titulo: "Estuda JS",
                texto: "Lorem Ipsum"
            }
        ]
        
        setTimeout(() => {
            this.setState({
                postits: postits,
                carregando: false
            })
        }, 3000)
    }

    adicionaPostit = (novoPostit) => {
        // TODO: cadastrar postit na API

        this.setState(prevState => {
            novoPostit.id = prevState.postits.length + 1

            return {
                postits: this.state.postits.concat(novoPostit)
            }
        })
    }

    editaPostit = (postitAlterado) => {
        // TODO: alterar postit na API
        
        this.setState(prevState => {
            return {
                postits: prevState.postits.map(postitAtual => {
                    if (postitAtual.id === postitAlterado.id) {
                        return postitAlterado
                    } else {
                        return postitAtual
                    }
                })
            }
        })
    }

    removePostit = (id) => {
        // TODO: remover postit na API

        this.setState(prevState => {
            return {
                postits: prevState.postits.filter(postitAtual => {
                    return postitAtual.id !== id ? true : false
                })
            }
        })
    }

    render() {
        return (
            <div className="home">
                <Postit
                    onAdicionaClick={this.adicionaPostit}
                    onEditaClick={this.editaPostit}
                    onRemoveClick={this.removePostit}s
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
                                onAdicionaClick={this.adicionaPostit}
                                onEditaClick={this.editaPostit}
                                onRemoveClick={this.removePostit}
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