interface User {
  birthYear: number;
}

function calculateAgeofUser(user: User) {
  return new Date().getFullYear() - user.birthYear;
}

calculateAgeofUser({
  birthYear: 1994,
});

// O typescript é uma linguagem de programação fortemente tipada, serve no node.js como um teste do código antes de subir ele para alguma plataforma.

//Com o comando npm -D typescript, instalamos o typescript como uma dependência do nosso projento no nodejs.

//Com O comando npx tsc --init criamos um arquivo de configuração do typescript.

//Com o comando npx tsc e o local do arquivo transformamos o arquivo typescript em node.js
