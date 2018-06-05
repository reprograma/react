import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import './Link.css'


function Link(props) {
    return (
        <LinkRouter className="link" to={props.to}>
            {props.children}
        </LinkRouter>
    )
}

export default Link