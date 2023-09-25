# Instruções para Configurar e Testar o Projeto

Siga as etapas abaixo para configurar e testar o projeto em sua máquina:

1. **Clone o Repositório:**
   Clone o repositório em sua máquina local usando o seguinte comando:

   ```
   git clone [URL_do_repositório]

   ```
2. **Navegue para a Pasta `back`:**
3. Após clonar o repositório, navegue para a pasta `back` usando o comando:
 ```
   cd back
   ```
4. Crie seu banco de dados local e em seguida configure seu .env no projeto seguindo o exemplo do arquivo .env.exemple
5. **Instale as Dependências:**
   Instale as dependências do projeto com o comando:

   ```
   npm install
   ```

6. **Execute as Migrações:**
   Execute as migrações do banco de dados usando o comando:

   ```
   npm run typeorm migration:run -- -d ./src/data-source
   ```

7. **Inicie o Servidor:**
   Inicie o servidor com o seguinte comando:
   ```
   npm run dev
   ```
8. **Cadastro de Usuário Pré-Programado:**
   Com o servidor em execução, abra um segundo terminal e execute o seguinte comando para cadastrar o usuário pré-programado:

   ```
   curl -X POST http://localhost:3000/pre-cadastrar-usuario
   ```

9. **Efetue o Login com as Credenciais:**
   Use as seguintes credenciais para efetuar o login do usuário pré-programado:
   ```
    - Email: devfullstack@gmail.com
    - Senha: devfullstack
   ```

Agora você está pronto para usar o projeto com o usuário pré-programado. Certifique-se de seguir essas etapas na ordem especificada para garantir uma configuração bem-sucedida.
