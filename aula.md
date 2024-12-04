
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


# Entendendo testes unitários

- Testes unitários são testes que validam o comportamento de uma única unidade de código, como uma função ou método. Eles são úteis para garantir que cada parte da aplicação esteja funcionando corretamente, sem depender de outras partes.

- Testes de integração são testes que validam a integração entre várias partes da aplicação, como a integração entre a camada de banco de dados e a camada de serviço. Eles são importantes para garantir que a aplicação esteja funcionando corretamente como um todo.

- Testes e2e (end-to-end) são testes que validam o comportamento da aplicação como um todo, simulando a interação do usuário com a aplicação. Eles são importantes para garantir que a aplicação esteja funcionando corretamente em todos os níveis, desde a camada de interface até a camada de banco de dados.

- A pirâmide de testes é uma estratégia que se baseia em ter mais testes unitários e menos testes de integração e e2e, pois testes unitários são mais rápidos e fáceis de escrever e manter do que outros tipos de testes.
