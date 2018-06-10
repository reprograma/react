import { combineReducers } from 'redux'

// terá as funções manipuladoras de ações disparadas pela tela
/* reducers de usuário */
const usuarioInicial = JSON.parse(localStorage.getItem('usuario'))

function manipulaAcoesDeUsuario(usuarioAnterior = usuarioInicial, acao) {
    switch(acao.type) {
        case 'LOGA_USUARIO':
            // this.setState({usuario: acao.payload.usuario})
            return acao.payload.usuario
        case 'DESLOGA_USUARIO':
            // this.setState({usuario: null})
            return null
        default: 
            return usuarioAnterior
    }
}

/* reducers de postit */
function manipulaAcoesDePostit(postitsAnteriores = [], acao) {
    switch(acao.type) {
        case 'LISTA_POSTITS':
            // this.setState({postits: acao.payload.postits })
            return acao.payload.postits
        case 'ADICIONA_POSTIT':
            return postitsAnteriores.concat(acao.payload.novoPostit)
        case 'EDITA_POSTIT':
            return postitsAnteriores.map(
                postitAtual => {
                    if (postitAtual.id === acao.payload.postitEditado.id) {
                        return acao.payload.postitEditado
                    } else {
                        return postitAtual
                    }
                }
            )
        case 'REMOVE_POSTIT':
            return postitsAnteriores.filter(
                postit => postit.id !== acao.payload.idPostitRemovido ? true : false
            )
        default:
            return postitsAnteriores
    }
}

// const stateGlobal = {
//     usuario: manipulaAcoesDeUsuario,
//     postits: manipulaAcoesDePostit
// }

const manipuladoresCombinados = combineReducers({
    usuario: manipulaAcoesDeUsuario,
    postits: manipulaAcoesDePostit
})

export default manipuladoresCombinados