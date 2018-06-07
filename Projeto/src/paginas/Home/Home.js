import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import loading from './loading.gif'
import './Home.css'


class Home extends React.Component {
    state = {
        postits: []
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
        
        setInterval(() => {
            this.setState({
                postits: postits
            })
        }, 3000)
    }

    render() {
        return (
            <div className="home">
                <h1>Home</h1>
    
                <Postit />
    
                {this.state.postits.length === 0 ? (
                    <img src={loading} alt="Carregando lista de postit" />
                ) : (
                    this.state.postits.map(postit => (
                        <Postit 
                            key={postit.id}
                            id={postit.id}
                            titulo={postit.titulo}
                            texto={postit.texto}
                        />
                    ))
                )}
            </div>
        )
    }
}

export default Home