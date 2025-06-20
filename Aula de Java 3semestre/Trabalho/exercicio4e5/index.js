const express = require('express');
const app = express();
const porta = 3000;

app.use(express.json()); 
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


// memoria
let tarefas = [];
let proximoId = 1;

// listar tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// listar tarefa especifica
app.get('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  res.json(tarefa);
});

// adicionar tarefa
app.post('/tarefas', (req, res) => {
  const { titulo, concluida = false } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: 'Título é obrigatório' });
  }

  const novaTarefa = {
    id: proximoId++,
    titulo,
    concluida
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// editar tarefa
app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, concluida } = req.body;

  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
});

// deletar
app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  tarefas.splice(index, 1);
  res.status(204).send(); 
});

// Inicia o servidor
app.listen(porta);
