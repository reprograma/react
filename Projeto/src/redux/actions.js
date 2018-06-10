// terá as funções disparadoras das ações
import { push } from 'react-router-redux'
import * as apiLogin from '../apis/usuarios'
import * as apiPostit from '../apis/postits'


/* ações de usuario */
export function disparaAcaoLogaUsuario(usuario) {
    return dispatch => {
        // aqui podemos fazer coisas antes de disparar a ação...
        apiLogin.postUsuario(usuario)
                .then(response => {
                    // salva o usuário no localStorage
                    localStorage.setItem('usuario', JSON.stringify(response.data.usuario))

                    // dispara ação para alterar o estado global
                    dispatch({
                        type: 'LOGA_USUARIO',
                        payload: {
                            usuario: response.data.usuario
                        }
                    })

                    // dispara acao de redireciona para a tela de postits
                    dispatch(push('/'))
                })
                .catch(error => {
                    if (error.response) {
                        alert(error.response.data.erro)
                    }
                })
    }
}

export function disparaAcaoDeslogaUsuario() {
    return dispatch => {
        localStorage.removeItem('usuario')

        dispatch({
            type: 'DESLOGA_USUARIO'
        })
    }
}


/* ações de postit */
export function disparaAcaoListaPostits() {
    return dispatch => {
        apiPostit.getPostits()
            .then(response => {
                dispatch({
                    type: 'LISTA_POSTITS',
                    payload: {
                        postits: response.data.postits
                    }
                })
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.erro)
                }
            })
    }
}

export function disparaAcaoAdicionaPostit(novoPostit) {
    return dispatch => {
        apiPostit.postPostit(novoPostit)
            .then(response => {
                novoPostit.id = response.data.id

                dispatch({
                    type: 'ADICIONA_POSTIT',
                    payload: {
                        novoPostit: novoPostit
                    }
                })
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.erro)
                }
            })
    }
}

export function disparaAcaoEditaPostit(postitEditado) {
    return dispatch => {
        apiPostit.putPostit(postitEditado)
            .then(response => {
                dispatch({
                    type: 'EDITA_POSTIT',
                    payload: {
                        postitEditado: postitEditado
                    }
                })
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.erro)
                }
            })
    }
}

export function disparaAcaoRemovePostit(idPostitRemovido) {
    return dispatch => {
        apiPostit.deletePostit(idPostitRemovido)
            .then(response => {
                dispatch({
                    type: 'REMOVE_POSTIT',
                    payload: {
                        idPostitRemovido: idPostitRemovido
                    }
                })
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.erro)
                }
            })
    }
}