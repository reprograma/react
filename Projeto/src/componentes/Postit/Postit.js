import React from 'react'
import './Postit.css'


class Postit extends React.Component {
    state = {
        titulo: '',
        texto: '',
        editando: false
    }

    handleCampoChange = e => {
        const nomeDoCampo = e.target.name // titulo ou texto
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

        console.log('postit', postit)
    }

    render() {
        return (
            <form 
                className="postit" 
                onSubmit={this.handleFormularioSubmit}
            >
                <input 
                    className="postit__titulo" 
                    type="text"
                    name="titulo"
                    placeholder="Título..."
                    area-label="Título"
                    onChange={this.handleCampoChange}
                />
                <textarea 
                    className="postit__texto"
                    name="texto"
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