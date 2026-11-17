export function buscarUsuario(usuarios, texto) {
    const textoBuscado = texto.trim().toLowerCase();

    if (!textoBuscado) {
        return usuarios;
    }

    return usuarios.filter(usuario =>
        usuario.name.toLowerCase().includes(textoBuscado)
    );
}