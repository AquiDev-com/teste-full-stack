O teste consiste em criar uma aplicação que expõe uma API REST de um CRUD de produtos e autenticação, e uma aplicação web contendo uma interface para login e acesso a dados de uma API externa. 

Depois de logado, o usuário da aplicação web deve poder acessar os dados da [Punk API v2](https://punkapi.com/). 

NOTA: O front-end e back-end deve ser realizado apenas por desenvolvedores Full Stack. Caso contrário, realize o teste de acordo com sua área de atuação.

NOTA 2: Não esqueça de fazer o fork do repositório.

## Back-end 💻
- Todos os endpoints de consulta de dados devem ter autenticação por webtoken ou similar.
- Deve existir validação dos dados recebidos pela API.
- O CRUD não precisa de interface, apenas o login e o cadastro

## Front-end 🎨
O front-end deve atender aos seguintes requisitos:
- Interface de login e cadastro com feedbacks para usuário ou senha incorreta.
- Listagem dos dados da Punk API v2.
- Responsividade.

## Extras 🌟
O desenvolvimento dessas features é opcional.

- Filtragem dos dados da Punk API v2 por diferentes critérios, como nome, estilo de cerveja, teor alcoólico, etc.
- Ordenação dos dados da Punk API v2 por diferentes campos, como nome, teor alcoólico, etc.
- Comentários e avaliações: permitir que os usuários deixem comentários e avaliações para as cervejas.
- Dockerfile com todas as dependências.

## Critérios de avaliação ✅
- Funcionamento do projeto.
- Estrutura do código.
- Uso de boas práticas.
- Cumprimento dos requisitos mínimos.

## Entrega 📦

- Um repositório git (fork deste).
- Um README do projeto com o passo-a-passo para executar a aplicação.

## Observações 📝

1. Pode ser utilizado qualquer framework front-end, preprocessadores de css, task runners, bundlers, etc, de sua preferência, mas nenhum deles é de uso obrigatório.

2. Não se deve fazer o commit de pastas como node_modules, o projeto deve instalar suas dependências a partir do package.json.
