import React from 'react'
import './CaixaTexto.css'

function CaixaTexto(props) {
    return (
        <input
            className="caixa-texto" 
            id={props.id}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}

export default CaixaTexto