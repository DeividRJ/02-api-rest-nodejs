
* BANCO DE DADOS

- knex é um querybuilder, sqlite é um tipo de database.

- migrations(knex) são um controle de versão dentro do nosso banco de dados, um histórico de todas as mudanças em um banco de dados, tem data e horário em uma linha do tempo para como o banco de dados mudou ao decorrer do tempo, vem com uma tabela quais itens do histórico foi alterado, caso uma imigration for enviada errada não pode ser editada tem que fazer uma nova migration, caso não tenha sido enviada o comando --migration:rollback desfaz a migration executada.

* Queries com Knex

- transactions é uma das formas de fazer querys simples de inserção e buscas de dados.

- Variáveis ambiente serve basicamente para criar um valor para qual ambiente está sendo trabalhado, por ex: development, test ou production.

- ZOD é uma ferramenta de validação de dados muito próxima com JS, serve para validar e tratar as váriaveis do projeto, verificando se estão corretas.


* REQUISITOS FUNCIONAIS

- Os requisitos funcionais são as características do sistema que devem ser atendidas para atingir seus objetivos.

- As regras de negócio são os critérios que o sistema deve seguir para suportar a tomada de decisões e garantir a conformidade.

# Plugins do Fastify

- plugins do Fastify, que são funções adicionais que fornecem recursos ao framework.

- Os plugins podem ser usados para adicionar funcionalidades como autenticação, log, validação de dados, gerenciamento de erros, entre outras. A aula vai te ensinar a criar e utilizar um plugin de rotas.

- a ordem dos plugins determinam sua prioridade de execução.

- podemos criar quantos plugins quisermos dentro de uma aplicação.
