# Divina Caneca Cervejaria
## Tecnologias utilizadas

[![My Skills](https://skillicons.dev/icons?i=nestjs,js,typescript,nodejs,postman,express,prisma,postgres,git,github,react,vite,html,css,vscode)](https://skillicons.dev)

## Descrição

### Backend



Esta API foi construído com o framework [Nestjs](https://github.com/nestjs/nest). A escolha do framework foi baseada em no fato de que, entre outras coisas, ele é bem completo, possui arquitetura modular e organizada e permite a documentação automática da API com o Swagger.

Neste projeto, o usuário pode se cadastrar, editar seus dados, realizar login, solicitar e-mail para recuperação de senha, recuperar senha através do token enviado para o email e criar um novo registro.

A autenticação da API foi construída utilizando [JWT](https://jwt.io/) e a definição das autorizações para o usuário foi feita utilizando o "Guard" do Nest.

Além disso, o usuário pode consultar a API [Punk API v2](https://punkapi.com/) e filtrar os resultados por nome ou id. A integração com a API externa foi feita utilizando [Axios](https://axios-http.com/ptbr/).


### Frontend



Este projeto apresenta a página inicial da cervejaria `Divina Caneca`. Nela o usuário poderá fazer o login ou cadastro para acessar as cervejas disponíveis. A página inicial está responsiva permitindo que seja aberta tanto em dispositivos móveis como computador.

O projeto foi desenvolvido com React utilizando [Typescript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/) e [React Hook Forms](https://react-hook-form.com/).


## Instalação

Faça o clone do arquivo `https://github.com/Daaaiii/teste-AquiDev.git`;

Para acessar o submodulo do backend, utilize o comando:
```
git submodule update --init --recursive

```
Abra o projeto no VSCode e instale as dependências:

```bash
$ npm install
```


### Rodando o app

```bash
# development

$ npm run dev

```
Mais detalhes sobre a instalação estão disponíveis no README de cada um dos projetos.

## TODO
```
1. Integração do frontend com o backend;
2. Página das cervejas;
3. Deploy da aplicação.

```

## Contato

- Autora - [Daiane Bolzan](https://www.linkedin.com/in/daiane-deponti-bolzan/)

## License

[MIT licensed](LICENSE).