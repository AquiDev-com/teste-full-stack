package com.ylanzey.aquidev.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class SwaggerConfig {


    @Bean
    public OpenAPI productControllerApi() {
        var info = new Info()
                .title("API Product")
                .description("API de produtos")
                .version("1.0.0");
        return new OpenAPI().info(info);
    }



}
