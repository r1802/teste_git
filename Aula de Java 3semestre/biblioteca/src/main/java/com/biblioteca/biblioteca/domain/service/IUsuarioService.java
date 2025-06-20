package com.biblioteca.biblioteca.domain.service;

import com.biblioteca.biblioteca.domain.dto.UsuarioDTO;

public interface IUsuarioService {
    
    UsuarioDTO cadastrarUsuario(UsuarioDTO usuario);

    UsuarioDTO atualizarUsuario(Long id, UsuarioDTO usuarioAtualizado);
    
    void removerUsuario(Long id);
    

}
