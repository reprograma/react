import protocolo from './configuracao'

export function postUsuario(usuario) {
    const url = '/login'
    // JSON pode ser diferente do Mock
    const json = {
        email: usuario.email,
        senha: usuario.senha
    }

    return protocolo.post(url, json)
}