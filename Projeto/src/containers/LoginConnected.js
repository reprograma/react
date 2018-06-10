import { connect } from 'react-redux'
import { disparaAcaoLogaUsuario } from '../redux/actions'
import Login from '../paginas/Login/Login'


function mapeiaAcoesParaProps(dispatch) {
    const props = {
        onEnviarClick: (usuario) => {
            dispatch(disparaAcaoLogaUsuario(usuario))
        }
    }

    return props
}

// const props = {
//     onEnviarClick: (usuario) => {}
// }

// <Login onEnviarClick={(usuario) => {}} />

// const conectaLoginAoStateGlobal = connect(
//     null,
//     mapeiaAcoesParaProps
// )

// const LoginConnected = conectaLoginAoStateGlobal(Login)


const LoginConnected = connect(
    null,
    mapeiaAcoesParaProps
)(Login)

export default LoginConnected