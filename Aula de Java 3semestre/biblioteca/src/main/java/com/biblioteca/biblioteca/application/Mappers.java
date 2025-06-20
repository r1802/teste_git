package com.biblioteca.biblioteca.application;

import org.mapstruct.Mapper;

import com.biblioteca.biblioteca.domain.dto.UsuarioDTO;
import com.biblioteca.biblioteca.domain.entity.Usuario;

@Mapper (componentModel = "spring")

public interface Mappers {

    UsuarioDTO UsuarioDto(Usuario usuario);
    Usuario UsuarioDTOtoEntity(UsuarioDTO  usuarioDTO);

   // LivroDTO LivroDto(Livro livro);
   // Livro  LivroDTOtoEntity(LivroDTO livroDTO);

    
}
