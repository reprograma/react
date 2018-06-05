import React from 'react'
import Grupo from './Grupo/Grupo'
import Botao from './Botao/Botao'
import Link from './Link/Link'
import './Formulario.css'


function Formulario(props) {
    return (
        <div className="formulario">
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>

            <form onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </div>
    )
}

Formulario.Grupo = Grupo
Formulario.Botao = Botao
Formulario.Link = Link

export default Formulario