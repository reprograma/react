import React from 'react'
import './Botao.css'


function Botao(props) {
    return (
        <button className={`botao ${props.cor === 'vermelho' ? 'botao-vermelho' : ''}`}>
            {props.children}
        </button>
    );
}

export default Botao