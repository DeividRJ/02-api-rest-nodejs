import fastify from "fastify";

const app = fastify();

// GET, POST, PUT, PATCH, DELETE

// http://localhost:3333/hello

// install -D @types/node, é uma dependência typescript de desenvolvimento para o nodejs.

// npm install tsc -D , TSX faz o processo de coverter o código javascript de forma automatizada sem "sujar as pastas", recomendável somente para desenvolvimento em produção o melhor é converter o código e executá-lo.

//Na pasta packaje.json fiz um código dentro do script para que ele execute o TSX, watch serve para reinicar o servidor sempre que uma alteração for feita.

app.get("/hello", () => {
  return "Hello World";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
