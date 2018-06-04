import React from 'react'
import './Link.css'


function Link(props) {
    return (
        <a className="link" onClick={props.onLinkClick}>
            {props.children}
        </a>
    )
}

export default Link