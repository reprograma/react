import React from 'react'
import Legenda from '../Legenda/Legenda'
import CaixaTexto from '../CaixaTexto/CaixaTexto'
import './Grupo.css'


// const props = {
//     erro: "Campo obrigatório",
//     children: [
//         <Grupo.Legenda htmlFor="email">
//             Email:
//         </Grupo.Legenda>,
//         <Grupo.Select opcoes={['SP, RJ']} seleciona="SP" />
//     ]
// }

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