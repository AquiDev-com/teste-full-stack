<h1 align="center" font-family="pattaya">Punk Beer</h1><br>

<h2 font-family="pattaya">Tecnologias utilizadas</h2>
<div style="display: inline_block"><br>
<img align="center" alt="Alexandra-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
   <img align="center" alt="Alexandra-Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Alexandra-postgreSQL" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg">  
</div><br>

<h2 font-family="pattaya">Descrição</h2><br>
<p font-family="robotto" font-size="16px" line-height="34px" align="justify">
A API é referente a uma aplicação onde um usuário poderá realizar um cadastro e fazer login para ter acesso à uma aplicação de front-end, contendo tipos de cervejas artesanais. 
</p><br>

<h2 font-family="pattaya">Libs utilizadas</h2><br>
<ul style="display: inline_block">
<li font-family="robotto" font-size="16px">bcryptjs: "^2.4.3",</li>
<li font-family="robotto" font-size="16px">cors: "^2.8.5",</li>
<li font-family="robotto" font-size="16px">dotenv: "^16.0.3"</li>
<li font-family="robotto" font-size="16px">express: "^4.18.2"</li>
<li font-family="robotto" font-size="16px">express-async-errors: "^3.1.1"</li>
<li font-family="robotto" font-size="16px">jsonwebtoken: "^9.0.0"</li>
<li font-family="robotto" font-size="16px">pdfkit: "^0.13.0"</li>
<li font-family="robotto" font-size="16px">pg: "^8.11.0"</li>
<li font-family="robotto" font-size="16px">reflect-metadata: "^0.1.13">
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
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://yarnpkg.com/package/zod)

A URL base da aplicação:
http://localhost:3000

---

## 2. Diagrama de Entidade de Relacionamentos (DER)

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama DER da API definindo tabelas utilizadas e seus relacionamentos no banco de dados.

![DER](costumers_contact.png)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do PostgresSQL e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:generate src/migrations/create<nome-da-class> -d src/data-source.ts
yarn typeorm migration:run -d src/data-source.ts
```

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

Na aplicação foi usada a biblioteca [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para criação de token e autenticação do cliente.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

## **users**

A tabela users é definida como:

| Campo    | Tipo   | Descrição                                                                |
| -------- | ------ | ------------------------------------------------------------------------ |
| id       | number | Identificador único do usuário                                           |
| name     | string | O nome do usuário.                                                       |
| email    | string | O e-mail do usuário.                                                     |
| password | string | A senha de acesso do usuário                                             |
| cpf      | string | O cpf do usuário.                                                        |
| phone    | string | O telefone do usuário                                                    |
| birthday | string | A data de nascimento do usuário                                          |
| image    | text   | A imagem do usuário                                                      |
| gender   | string | enum com as opções: "male", "female", "no binary", "I prefer not to say" |

### Endpoints

| Método | Rota       | Descrição                                      |
| ------ | ---------- | ---------------------------------------------- |
| POST   | /users     | Criação de um usuário.                         |
| GET    | /users     | Lista todos os usuários.                       |
| GET    | /users/:id | Lista um usuário, usando seu ID como parâmetro |

---

### 1.1. **Criar Usuário**

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
  "name": "Alexander Miranda",
  "email": "alexander@mail.com",
  "password": "Ale12345678",
  "cpf": "12325748758",
  "phone": "2198516422325",
  "birthday": "05/02/1997",
  "gender": "male"
}
```

### Resposta da Requisição:

```json
{
	"name": "Alexander Miranda",
	"email": "alexander@mail.com",
	"cpf": "12325748758",
	"phone": "2198516422325",
	"birthday": "05/02/1997",
	"image": null,
	"gender": "male",
	"id": 5
}

OBS: Não há retorno da senha na resposta da requisição.
```

### 1.2. **Listar todos Usuários**

```
GET /users
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
[
  {
    "name": "Alexandra Miranda",
    "email": "alexandra@mail.com",
    "cpf": "12025563325",
    "phone": "(21) 98996-5223",
    "birthday": "1986-11-07",
    "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4E03AQF2dRhbsBISsw%2Fprofile-displayphoto-shrink_800_800%2F0%2F1653429684261%3Fe%3D2147483647%26v%3Dbeta%26t%3D1vGcHcRTmAHcBUV6ZKYG3Wyer8A56D4N6uelgUVjcoM&tbnid=brTsF5TxLjA5YM&vet=12ahUKEwjI8uC_r8SBAxUoCbkGHV1tAgcQMygcegUIARCGAQ..i&imgrefurl=https%3A%2F%2Fwww.linkedin.com%2Fin%2Falexandra-miranda-75a97b108&docid=octP_tHPfzlBwM&w=560&h=560&q=alexandra%20miranda&ved=2ahUKEwjI8uC_r8SBAxUoCbkGHV1tAgcQMygcegUIARCGAQ",
    "gender": "female",
    "id": 3
  },
  {
    "name": "Marcos Paulo",
    "email": "marcospaulo@mail.com",
    "cpf": "14527562389",
    "phone": "(21) 98956-2345",
    "birthday": "1987-05-13",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQE2dF3fMucifnwwWAOpf6u9Bs-7jteBxT0SikiwuktINebEYTfXtrTdYpsAaIYX7tOGY&usqp=CAU",
    "gender": "male",
    "id": 4
  },
  {
    "name": "Alexander Miranda",
    "email": "alexander@mail.com",
    "cpf": "12325748758",
    "phone": "2198516422325",
    "birthday": "1997-02-05",
    "image": null,
    "gender": "male",
    "id": 5
  }
]
```

### 1.3. **Listar Usuário por id**

### Exemplo de Request:

```
GET /users/:id
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
{
  "name": "Alexander Miranda",
  "email": "alexander@mail.com",
  "cpf": "12325748758",
  "phone": "2198516422325",
  "birthday": "1997-02-05",
  "image": null,
  "gender": "male",
  "id": 5
}
```

### Exemplo de possíveis erros de request.

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | number | Identificador único do usuário (User) |

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
  "name": "Alexander Miranda",
  "email": "alexander@mail.com",
  "cpf": "12325748758",
  "phone": "2198516422325",
  "birthday": "05/02/1997",
  "image": null,
  "gender": "male",
  "id": 5
}
```

### Possíveis Erros:

| Código do Erro | Descrição                      |
| -------------- | ------------------------------ |
| 404 Not Found  | "message": "Client not found!" |

### 4.1. **Listando Relatório de Contatos**

[ Voltar aos Endpoints ](#5-endpoints)

### `/listContacts/`

### Exemplo de Request:

```
GET /listContacts/
Host: http://localhost:3000
Authorization: esta rota necessita do token do cliente  para acesso
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

```
pdf
```

![Customer Report](costumerReportPDF.png)

### Possíveis Erros:

| 401 Unauthorized | You don`t have permissions or invalid token. |
