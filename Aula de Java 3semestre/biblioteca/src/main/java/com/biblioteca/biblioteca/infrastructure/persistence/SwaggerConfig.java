package com.biblioteca.biblioteca.infrastructure.persistence;


import org.springdoc.core.customizers.OpenApiCustomizer;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.bind.annotation.RestController;

@Configuration
public class SwaggerConfig  implements WebMvcConfigurer{

    @Bean
    public GroupedOpenApi publicApi(){
        return GroupedOpenApi.builder()
        .group("v1")
        .pathsToMatch("/api/**") //Ajuste para incluir apenas os caminhos que começam com /api/
        .packagesToScan("com.biblioteca.biblioteca") //Ajuste para o pacote dos seus RestControllers
        .addOpenApiMethodFilter(method -> method.getDeclaringClass()
        .isAnnotationPresent(RestController.class))
        .addOpenApiCustomizer(customOpenApi())
        .build();
    }

    public OpenApiCustomizer customOpenApi() {
        return openApi -> {
            openApi.getInfo().setTitle("Seminario 3 ADS/ESW"); //Renomeia o Titulo
            openApi.getInfo().setVersion("1.0.0"); //define a versão
            openApi.getInfo().setDescription("API de gerenciamento de emprestimo de livros."); //Define a descrição
        };
    }
    
}
