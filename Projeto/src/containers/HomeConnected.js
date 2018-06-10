import { connect } from 'react-redux'
import { 
    disparaAcaoListaPostits,
    disparaAcaoAdicionaPostit,
    disparaAcaoEditaPostit,
    disparaAcaoRemovePostit
} from '../redux/actions'
import Home from '../paginas/Home/Home'


function mapeiaEstadoParaProps(stateGlobal) {
    const props = {
        usuario: stateGlobal.usuario,
        postits: stateGlobal.postits
    }

    return props
}


function mapeiaDisparoDeAcoesParaProps(dispatch) {
    const props = {
        onListaPostits: () => {
            dispatch(disparaAcaoListaPostits())
        },
        onAdicionaPostit: (novoPostit) => {
            dispatch(disparaAcaoAdicionaPostit(novoPostit))
        },
        onEditaPostit: (postitEditado) => {
            dispatch(disparaAcaoEditaPostit(postitEditado))
        },
        onRemovePostit: (idPostitRemovido) => {
            dispatch(disparaAcaoRemovePostit(idPostitRemovido))
        }
    }

    return props
}

// const props = {
//     usuario: {},
//     postits: [],
//     onListaPostits: () => {},
//     onAdicionaPostit: (novoPostit) => {},
//     onEditaPostit: (postitEditado) => {},
//     onRemovePostit: (idPostitRemovido) => {}
// }

// <Home 
//    usuario={} 
//    postits=[]
//    onListaPostits={() => {}}
//    onAdicionaPostit={(novoPostit) => {}}
//    onEditaPostit={(postitEditado) => {}}
//    onRemovePostit={(idPostitRemovido) => {}}
// />


const HomeConnected = connect(
    mapeiaEstadoParaProps,
    mapeiaDisparoDeAcoesParaProps
)(Home)

export default HomeConnected