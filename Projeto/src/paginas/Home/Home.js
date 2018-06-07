import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import './Home.css'


function Home(props) {
    return (
        <div className="home">
            <h1>Home</h1>

            <Postit />

            <Postit
                id="e8652ad9-e98d-49d7-a45f-6f9dc51838ad"
                titulo="Estudar Javascript"
                texto="Ler frontend handbook 2018"
                editando={true}
            />

            <Postit
                id="88de0d27-a1d7-479d-a6b7-7f2b3899b1b3"
                titulo="Estudar HTML"
                texto="Bla bla bla"
                editando={false}
            />
        </div>
    )
}

export default Home