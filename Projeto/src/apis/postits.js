import protocolo from './configuracao'

// busca a lista de postits
export function getPostits() {
    const url = '/postits'

    return protocolo.get(url)
}

// cadastra um postit
export function postPostit(novoPostit) {
    const url = '/postits'
    const json = {
        titulo: novoPostit.titulo,
        texto: novoPostit.texto
    }
    
    return protocolo.post(url, json)
}

// altera um postit
export function putPostit(postitAlterado) {
    const url = `/postits/${postitAlterado.id}`
    const json = {
        titulo: postitAlterado.titulo,
        texto: postitAlterado.texto
    }

    return protocolo.put(url, json)
}

// deleta um postit
export function deletePostit(idPostitRemovido) {
    const url = `/postits/${idPostitRemovido}`

    return protocolo.delete(url)
}