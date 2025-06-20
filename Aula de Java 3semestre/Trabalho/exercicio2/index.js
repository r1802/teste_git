const express = require('express');
const app = express();
const porta = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Página inicial');
});

//sobre
app.get('/sobre', (req, res) => {
  res.send('Sobre nós');
});

//contato
app.post('/contato', (req, res) => {
  res.send('Mensagem recebida!');
});

app.listen(porta);
