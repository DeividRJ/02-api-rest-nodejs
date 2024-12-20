
* BANCO DE DADOS

- knex é um querybuilder, sqlite é um tipo de database.

- migrations(knex) são um controle de versão dentro do nosso banco de dados, um histórico de todas as mudanças em um banco de dados, tem data e horário em uma linha do tempo para como o banco de dados mudou ao decorrer do tempo, vem com uma tabela quais itens do histórico foi alterado, caso uma imigration for enviada errada não pode ser editada tem que fazer uma nova migration, caso não tenha sido enviada o comando --migration:rollback desfaz a migration executada.

* Queries com Knex

- transactions é uma das formas de fazer querys simples de inserção e buscas de dados.

- Variáveis ambiente serve basicamente para criar um valor para qual ambiente está sendo trabalhado, por ex: development, test ou production.

- ZOD é uma ferramenta de validação de dados muito próxima com JS, serve para validar e tratar as váriaveis do projeto, verificando se estão corretas.



* IMPLEMENTANDO ROTAS

# REQUISITOS FUNCIONAIS

- Os requisitos funcionais são as características do sistema que devem ser atendidas para atingir seus objetivos.

- As regras de negócio são os critérios que o sistema deve seguir para suportar a tomada de decisões e garantir a conformidade.

# Plugins do Fastify

- plugins do Fastify, que são funções adicionais que fornecem recursos ao framework.

- Os plugins podem ser usados para adicionar funcionalidades como autenticação, log, validação de dados, gerenciamento de erros, entre outras. A aula vai te ensinar a criar e utilizar um plugin de rotas.

- a ordem dos plugins determinam sua prioridade de execução.

- podemos criar quantos plugins quisermos dentro de uma aplicação.

# Criação de transações

- Nessa aula, além de estruturar as rotas de transações, vamos aprender a validar os dados da requisição (request.body) com o Zod para garantir que as informações recebidas sejam válidas e após isso, fazer de fato a inserção no banco de dados.

# Tipagem no Knex

- Esta aula ensinará como integrar o Knex com o TypeScript para ter suporte ao autocomplete de tabelas. Isso significa que, ao digitar o nome de uma tabela, o TypeScript será capaz de sugerir automaticamente as colunas existentes e as tipagens de dados corretas.

# Listagem de transações

- Nessa aula seguiremos implementando as rotas para listar todas as transações e também outra que deve receber o id para trazer uma única transação.

# Resumo de transações

- Finalizando a criação de rotas, vamos implementar a rota para calcular (somar) as transações e retornar o total.

# Utilizando cookies no Fastify

- Nessa aula vamos identificar o usuário que está utilizando a aplicação ao ler e escrever informações em Cookies utilizando o Fastify.

- Os cookies são como parametros só que criados por nossa própria aplicação e são enviados automaticamente em todas as requisições, ótimos para identificar usuários ou anotar informações de contexto entre requisições.

# Validando existência de cookie

- Nesta aula, validaremos o cookie sessionId para identificar o usuário da aplicação.

- A busca e validação serão realizadas usando uma função como preHandler (middleware)

# Configurando um Hook Global

- Nessa aula vamos aprender a como registrar hooks no Fastify e em quais rotas eles vão impactar.

- Hooks servem para criar uma função "global" para a aplicação, pode ser tanto colocado dentro do arquivo somente para aquela sessão ou de forma global ou seja para todas as sessões da aplicação.


* Testes automatizados

# Entendendo testes unitários

- Testes unitários são testes que validam o comportamento de uma única unidade de código, como uma função ou método. Eles são úteis para garantir que cada parte da aplicação esteja funcionando corretamente, sem depender de outras partes.

- Testes de integração são testes que validam a integração entre várias partes da aplicação, como a integração entre a camada de banco de dados e a camada de serviço. Eles são importantes para garantir que a aplicação esteja funcionando corretamente como um todo.

- Testes e2e (end-to-end) são testes que validam o comportamento da aplicação como um todo, simulando a interação do usuário com a aplicação. Eles são importantes para garantir que a aplicação esteja funcionando corretamente em todos os níveis, desde a camada de interface até a camada de banco de dados.

- A pirâmide de testes é uma estratégia que se baseia em ter mais testes unitários e menos testes de integração e e2e, pois testes unitários são mais rápidos e fáceis de escrever e manter do que outros tipos de testes.

# Criando primeiro teste

- Esta aula ensina sobre como criar o primeiro arquivo de testes utilizando o vitest, uma ferramenta para escrita e execução de testes automatizados. A aula irá cobrir desde o motivo do uso dessa ferramenta até a instalação, escrita e execução do primeiro teste.

# Testando a criação da transação

- Esta aula ensina como criar o primeiro teste e2e para testar a rota de criação de transação, utilizando o pacote supertest. Além disso, a aula explica o uso das funções beforeAll, beforeEach, afterAll e afterEach para realizar configurações e limpezas antes e depois dos testes e2e.

Uma breve explicação sobre esses métodos:

- beforeAll

É uma função que é executada uma única vez antes de todos os testes. É útil para inicializar recursos compartilhados que serão utilizados pelos testes.

- beforeEach

É uma função que é executada antes de cada teste. É útil para preparar o ambiente antes da execução de cada teste, por exemplo, inicializar variáveis ou limpar o banco de dados.

- afterAll

É uma função que é executada uma única vez após todos os testes terem sido executados. É útil para limpar recursos compartilhados ou fechar conexões abertas.

- afterEach

É uma função que é executada após cada teste. É útil para limpar o ambiente depois da execução de cada teste, por exemplo, limpar variáveis ou fechar conexões com o banco de dados.

# Cateogrizando os testes

- Esta aula irá explicar sobre a organização de testes utilizando a função describe.

- A função describe permite agrupar testes relacionados em blocos para melhorar a legibilidade e manutenção dos códigos de testes. Além disso, é possível utilizar a função describe para criar estruturas de testes hierárquicas e repetir o setup em blocos de testes comuns.

- Também é explicado sobre o uso da função it para criar cada teste, descrevendo em inglês seguindo o padrão "it should be able".

# Testando listagem de transações

- Nessa aula é explicado como criar um teste e2e para listagem de transações.

- É ensinado como recuperar o cookie de uma resposta do supertest e utilizá-lo em outra requisição do supertest, além de validar o corpo da listagem usando as funções expect.toEqual e expect.objectContaining.

# Configurando banco de testes

- Nesta aula, você aprenderá como se deve lidar com o banco de dados durante os testes e2e e como configurar esse processo, utilizando variáveis ambiente de testes e a função beforeEach.

# Finalizando testes da aplicação

- Nessa aula, implementaremos os testes das rotas restantes e concluindo os testes de todas as rotas.

# Deploy do app no Render

Obs. 1: O Render há um tempo vem solicitando uma configuração a mais no projeto par realizar o deploy corretamente. Na configuração de listen no arquivo server.ts, adicione a seguinte validação:

host: ("RENDER" in process.env) ? '0.0.0.0' : 'localhost',
Obs. 2: Na plataforma Render, a variável ambiente para identificar a porta da aplicação precisa ser exatamente PORT e não pode ser definida nas configurações do serviço, pois é a própria plataforma que adiciona esse valor (não é visível).

Obs. 3: Nessa aula, foi configurado a engines do node no package.json com o valor de >=18, mas essa configuração faz com que o Render utilize versões recentes, como a 21. Então deve ser trocado para "node": "18", forçando assim a utilizar a versão 18 do Node.js.

Nessa aula você aprenderá como configurar a aplicação para suportar dois bancos de dados: SQLite (para desenvolvimento) e PostgreSQL (para produção). Além disso, você verá como fazer o deploy na plataforma Render, configurando o banco de dados PostgreSQL e variáveis ambiente.

Build Command: npm install && npm run knex -- migrate:latest && npm run build

Start Command: node build/server.js