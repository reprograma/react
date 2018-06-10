import { connect } from 'react-redux'
import {
    disparaAcaoListaPostits,
    disparaAcaoAdicionaPostit,
    disparaAcaoEditaPostit,
    disparaAcaoRemovePostit
} from '../redux/actions'
import Home from '../paginas/Home/Home'


function mapeiaDadosParaProps(stateGlobal) {
    const props = {
        usuario: stateGlobal.usuario,
        postits: stateGlobal.postits
    }

    return props
}

function mapeiaAcoesParaProps(dispatch) {
    const props = {
        onListaPostits: () => {
            dispatch(disparaAcaoListaPostits())
        },
        onAdicionaPostit: (novoPostit) => {
            dispatch(disparaAcaoAdicionaPostit(novoPostit))
        },
        onEditaPotit: (postitEditado) => {
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
//     onEditaPotit: (postitEditado) => {},
//     onRemovePostit: (idPostitRemovido) => {}
// }

// <Home 
//     usuairo={{}} 
//     postits={[]} 
//     onListaPostits={() => {}} 
//     onAdicionaPostit={(novoPostit) => {}} 
//     onEditaPotit={(postitEditado) => {}} 
//     onRemovePostit={(idPostitRemovido) => {}} 
// />


const HomeConnected = connect(
    mapeiaDadosParaProps,
    mapeiaAcoesParaProps
)(Home)

export default HomeConnected