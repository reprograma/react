import React from 'react'
import Imagem404 from './paginaNaoEnc.gif'


function NaoEncontrada(props) {
    return (
        <div className="nao-encontrada">
            <h1>Página não encontrada</h1>
            <img src={Imagem404} alt="Não encontrada" />
        </div>
    )
}

export default NaoEncontrada