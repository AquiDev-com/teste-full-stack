<h1 align="center" font-family="pattaya">Craft Beers</h1><br>

<h2 font-family="pattaya">Tecnologias utilizadas</h2>
<div style="display: inline_block"><br>
<img align="center" alt="Juliana-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
   <img align="center" alt="Juliana-Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Juliana-postgreSQL" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg">  
</div><br>

<h2 font-family="pattaya">Descrição</h2><br>
<p font-family="robotto" font-size="16px" line-height="34px" align="justify">
A API consiste em uma aplicação de cadastro e login de usuários, para poder acessa uma API externa de Cervejas Artesanais. A API foi feita com o CRUD completo, criar, logar, listar, listar por ID, editar e deletar. Tudo isso com a autenticação do usuário.
</p><br>

<h2 font-family="pattaya">Libs utilizadas</h2><br>
<ul style="display: inline_block">
<li font-family="robotto" font-size="16px">bcryptjs: "^2.4.3",</li>
<li font-family="robotto" font-size="16px">cors: "^2.8.5",</li>
<li font-family="robotto" font-size="16px">dotenv: "^16.0.3"</li>
<li font-family="robotto" font-size="16px">express: "^4.18.2"</li>
<li font-family="robotto" font-size="16px">express-async-errors: "^3.1.1"</li>
<li font-family="robotto" font-size="16px">jsonwebtoken: "^9.0.0"</li>
<li font-family="robotto" font-size="16px">pg: "^8.11.0"</li>
<li font-family="robotto" font-size="16px">pg-format: "^1.0.4"</li>
<li font-family="robotto" font-size="16px">typeorm: "0.3.15"</li>
<li font-family="robotto" font-size="16px">zod: "^3.21.4"</li>
</ul><br>

# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://zod.dev/)

A URL base da aplicação:
http://localhost:3000

---

## 2. Diagrama ER
[ Voltar para o topo ](#tabela-de-conteúdos)

## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---
## 4. Autenticação
[ Voltar para o topo ](#tabela-de-conteúdos)


Autenticação realizada pelo token do Usuário.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
    - [POST - /users](#11-criação-de-usuários)
    - [GET - /users](#12-listando-usuários)
	- [GET - /users/:id](#13-listar-usuário-por-id)
	- [PATCH - /users/:id](#14-atualizar-usuário-por-id)
	- [DELETE - /users/:id](#15-deletar-usuário-por-id)
- [Login](#2-login)
    - [POST - /login](#21-login-de-usuários)

## 1. **Usuários**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Client é definido como:

| Campo       | Tipo   | Descrição                                       |
| ----------- |--------|-------------------------------------------------|
| id          | string | Identificador único do usuário.                 |
| name        | string | O nome do usuário.                           |
| email       | string | O e-mail do  usuário.                         |
| password    | string | A senha de acesso do usuário.                |
| phone       | string | O número do usuário.                         |
| dateRegister| date   | A data de registro do usuário.               |

### Endpoints

| Método   | Rota         | Descrição                               |
|----------|------------  |-----------------------------------------|
| POST     | /users     | Criação de um usuário.                  |
| GET      | /users     | Lista todos os usuário                 |
| GET      | /users/:id| Lista um usuário usando seu ID como parâmetro |
| PATCH      | /users/:id| Atualiza um usuário usando seu ID como parâmetro |
| DELETE      | /users/:id| Deleta um usuário usando seu ID como parâmetro |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"name": "joao",
	"email": "joao@mail.com",
	"password": "Testando123@",
	"phone": "11966545453"
}
```

### Schema de Validação com Yup:
```javascript
    name: z.string().max(45),

    email: z.string().email().max(45),

    password: z.string().max(120),

    phone: z.string().max(45)
```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```

```json
{
	"name": "joao",
	"email": "joao@mail.com",
	"phone": "11665d45453",
	"id": 5,
	"dateRegister": "2023-05-26T21:03:50.709Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 409 Conflict   | Email already registered. |

---

### 1.2. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
GET /users
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
{
	"name": "joao",
	"email": "joao@mail.com",
	"phone": "11665d45453",
	"id": 5,
	"dateRegister": "2023-05-26T21:03:50.709Z"
}
]
```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.3. **Listar Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/ users/:id`

### Exemplo de Request:
```
GET /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"users": {
		"name": "Maria",
		"email": "maria@mail.com",
		"phone": "11485904965",
		"id": 6,
		"dateRegister": "2023-05-26T21:17:57.623Z"
	},
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | User not found. |
| 401 Unauthorized   | You don`t have permissions. |

### 1.4. **Atualizar Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/ users/:id`

### Exemplo de Request:
```
PATCH /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
{
	"name": "José"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
		"name": "José",
		"email": "jose@mail.com",
		"phone": "11485904965",
		"id": 6,
		"dateRegister": "2023-05-26T21:17:57.623Z"
	},
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | User not found. |
| 401 Unauthorized   | You don`t have permissions. |

### 1.5. **Deletar usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/ users/:id`

### Exemplo de Request:
```
DELETE /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
vazio
```

### Exemplo de Response:
```
204 NO CONTENT
```
```json
vazio
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | User not found. |
| 401 Unauthorized   | You don`t have permissions. |

## 2. **Login**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Login é definido como:

| Campo       | Tipo   | Descrição                                       |
| ----------- |--------|-------------------------------------------------|
| email       | string | O e-mail do usuário.                         |
| password    | string | A senha de acesso do usuário.                |

### Endpoints

| Método   | Rota         | Descrição                               |
|----------|------------  |-----------------------------------------|
| POST     | /login     | Login de um usuário.                  |

---

### 2.1. **Login de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/login`

### Exemplo de Request:
```
POST /login
Host: http://localhost:3000
Authorization: Token do usuário
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"email": "joao@mail.com",
	"password": "Testando123@"
}
```

### Schema de Validação com Yup:
```javascript
    email: z.string().email().max(45),
    password: z.string().max(120)
```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFpcmFuYUBtYWlsLmNvbSIsImlhdCI6MTY4NTQ
	NTg1OSwiZXhwIjoxNjg1NTQyMjU5LCJzdWIiOiI2In0.oLOP71sSGj_bgJsHxQVBUPWT41UkWLWUkvzWZY3CwbE"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized   | Invalid credentials |

---

