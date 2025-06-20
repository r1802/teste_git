const express = require('express');
const app = express();
const porta = 3000;


app.get('/par-ou-impar', (req, res) => {
  const numero = parseInt(req.query.numero); 

  // Verifica se o valor é um número válido
  if (isNaN(numero)) {
    return res.status(400).json({ erro: 'Número inválido' });
  }
  
  const resultado = numero % 2 === 0 ? 'par' : 'ímpar';
  
  res.json({ resultado });
});

app.listen(porta);
