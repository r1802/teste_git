const http = require('http');

// Cria o servidor
const servidor = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain; charset=utf-8'); 
  res.end('Olá, mundo!'); 
});

// Faz o servidor rodar na porta 3000
const porta = 3000;
servidor.listen(porta);