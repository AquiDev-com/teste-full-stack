# Teste Aquidev usandoSpring boot, Docker e postgres.

## Requirimentos 

- Java 17+
- Docker na versão mais recente
- docker compose

### Rotas da aplicaçao no localhost

- GET    http://localhost:8080/api/products
- GET    http://localhost:8080/api/products/{id}
- POST   http://localhost:8080/api/products
- PUT    http://localhost:8080/api/products/{id}
- DELETE http://localhost:8080/api/products/{id}

### Rotas da aplicação usando Swagger

- URL: http://localhost:8080/swagger-ui/index.html

## Rodar o projeto

- `Depois que o java 17 e o docker estiver instalado, so entrar na pasta do projeto e rodar o seguinte comando.`

- Linux/MacOS: use o comando `./mvnw spring-boot:run`
- Windows: use o comando `./mvnw.cmd spring-boot:run`
