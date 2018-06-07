import React from 'react'
import FaClose from 'react-icons/lib/fa/close'
import './Postit.css'


class Postit extends React.Component {
    state = {
        id: null,
        titulo: '',
        texto: '',
        editando: false
    }

    handleCampoChange = e => {
        // name="titulo" ou name="texto"
        const nomeDoCampo = e.target.name
        const valorDoCampo = e.target.value

        this.setState({
            [nomeDoCampo]: valorDoCampo
        })
    }

    handleFormularioSubmit = e => {
        e.preventDefault()

        // TODO: cadastrar postit na API
        const postit = {
            titulo: this.state.titulo,
            texto: this.state.texto
        }

        console.log('cadastrando postit', postit)

        this.setState({
            titulo: '',
            texto: ''
        })
    }

    handleFormularioClick = e => {
        this.setState({
            editando: true
        })
    }

    handleBotaoRemoverClick = e => {
        e.stopPropagation()

        // TODO: remover postit na API
        const postit = {
            id: this.state.id
        }

        console.log('removendo post-it', postit)
    }

    render() {
        return (
            <form 
                className="postit" 
                onClick={this.handleFormularioClick}
                onSubmit={this.handleFormularioSubmit}
            >
                {this.state.editando && (
                <button 
                    className="postit__botao-remover"
                    type="button"
                    onClick={this.handleBotaoRemoverClick}
                >
                    <FaClose />
                </button>
                )}
                
                <input 
                    className="postit__titulo" 
                    type="text"
                    name="titulo"
                    value={this.state.titulo}
                    placeholder="Título..."
                    area-label="Título"
                    onChange={this.handleCampoChange}
                />
                <textarea 
                    className="postit__texto"
                    name="texto"
                    value={this.state.texto}
                    placeholder="Digite o texto..."
                    area-label="Texto"
                    onChange={this.handleCampoChange}
                />
                <button className="postit__botao-concluir">
                    Concluído
                </button>
            </form>
        )
    }
}


export default Postit