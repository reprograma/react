import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import './Home.css'


function Home(props) {
    return (
        <div className="home">
            <h1>Home</h1>
            <Postit />
        </div>
    )
}

export default Home