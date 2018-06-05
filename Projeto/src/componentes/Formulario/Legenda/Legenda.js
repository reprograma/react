import React from 'react'
import './Legenda.css'


function Legenda(props) {
    return (
        <label className="legenda" htmlFor={props.htmlFor}>
            {props.children}
        </label>
    )
}

export default Legenda