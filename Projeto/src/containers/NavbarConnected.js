import { connect } from 'react-redux'
import { disparaAcaoDeslogaUsuario } from '../redux/actions'
import Navbar from '../componentes/Navbar/Navbar'


function mapeiaEstadoParaProps(stateGlobal) {
    const props = {
        usuario: stateGlobal.usuario
    }

    return props
}

function mapeiaDisparoDeAcoesParaProsp(dispatch) {
    const props = {
        onSairClick: () => {
            dispatch(disparaAcaoDeslogaUsuario())
        }
    }

    return props
}

// const props = {
//     usuario: {},
//     onSairClick: () => {}
// }

// <Navbar usuario={} onSairClick={() => {}}>


const NavbarConnected = connect(
    mapeiaEstadoParaProps,
    mapeiaDisparoDeAcoesParaProsp
)(Navbar)

export default NavbarConnected