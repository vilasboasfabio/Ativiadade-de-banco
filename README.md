# Backend para Gerenciamento de Bruxos e Varinhas

Este é um backend construído com Node.js e PostgreSQL para gerenciar bruxos e varinhas no universo mágico de Harry Potter. Ele permite operações CRUD (Criar, Ler, Atualizar, Deletar) para bruxos e varinhas.

## Funcionalidades

- Adicionar um novo bruxo.
- Listar todos os bruxos.
- Atualizar um bruxo existente.
- Deletar um bruxo.
- Adicionar uma nova varinha.
- Listar todas as varinhas.
- Atualizar uma varinha existente.
- Deletar uma varinha.

## Como usar

Para testar o backend, você pode usar o Insomnia. Abaixo estão as rotas disponíveis:

### Bruxos

- POST `/bruxos` - Adiciona um novo bruxo.
- GET `/bruxos` - Lista todos os bruxos.
- PUT `/bruxos/:id` - Atualiza um bruxo existente pelo ID.
- DELETE `/bruxos/:id` - Deleta um bruxo pelo ID.

### Varinhas

- POST `/varinhas` - Adiciona uma nova varinha.
- GET `/varinhas` - Lista todas as varinhas.
- PUT `/varinhas/:id` - Atualiza uma varinha existente pelo ID.
- DELETE `/varinhas/:id` - Deleta uma varinha pelo ID.

## Instruções de Instalação

1. Clone o repositório:
git clone [https://github.com/vilasboasfabio/Ativiadade-de-banco.git]

2. Instale as dependências:
npm init -y
npm install express
npm install pg
npm install nodemon


3. Crie um banco de dados PostgreSQL e configure as credenciais de acesso

4. Configure as variáveis de ambiente
- "dev": "nodemon index.js"

5. Execute o servidor:

- npm run dev

 


