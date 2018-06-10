import { connect } from 'react-redux'
import { disparaAcaoDeslogaUsuario } from '../redux/actions'
import Navbar from '../componentes/Navbar/Navbar'


function mapeiaDadosParaProps(stateGlobal) {
    const props = {
        usuario: stateGlobal.usuario
    }

    return props
}

function mapeiaAcoesParaProps(dispatch) {
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

// <Navbar usuario={{}} onSairClick={() => {}} /> 


const NavbarConnected = connect(
    mapeiaDadosParaProps,
    mapeiaAcoesParaProps
)(Navbar)

export default NavbarConnected