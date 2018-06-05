import React from 'react'
import Legenda from '../Legenda/Legenda'
import CaixaTexto from '../CaixaTexto/CaixaTexto'
import './Grupo.css'


function Grupo(props) {
    return (
        <div className="grupo">
            {props.children}
            {props.erro && (
                <p className="grupo__erro">
                    {props.erro}
                </p>
            )}
        </div>
    )
}

Grupo.Legenda = Legenda
Grupo.CaixaTexto = CaixaTexto

export default Grupo