import { connect } from 'react-redux'
import { disparaAcaoLogaUsuario } from '../redux/actions'
import Login from '../paginas/Login/Login'


function mapeiaDisparoDeAcoesParaProps(dispatch) {
    const props = {
        onEnviarClick: (usuario) => {
            dispatch(disparaAcaoLogaUsuario(usuario))
        }
    }

    return props
}

// const props = {
//     onEnviarClick: (usuario) => {
//         dispatch(disparaAcaoLogaUsuario(usuario))
//     }
// }

// <Login onEnviarClick={(usuario) => {}} />

// const conectaAoStateGlobal = connect(
//     undefined,
//     mapeiaDisparoDeAcoesParaProps
// )

// const LoginConnetado = conectaAoStateGlobal(Login)

const LoginConectado = connect(
    undefined,
    mapeiaDisparoDeAcoesParaProps
)(Login)

export default LoginConectado