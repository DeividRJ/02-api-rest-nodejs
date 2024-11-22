
* BANCO DE DADOS

- knex é um querybuilder, sqlite é um tipo de database.

- migrations(knex) são um controle de versão dentro do nosso banco de dados, um histórico de todas as mudanças em um banco de dados, tem data e horário em uma linha do tempo para como o banco de dados mudou ao decorrer do tempo, vem com uma tabela quais itens do histórico foi alterado, caso uma imigration for enviada errada não pode ser editada tem que fazer uma nova migration, caso não tenha sido enviada o comando --migration:rollback desfaz a migration executada.