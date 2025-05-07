const express = require('express');
const morgan = require('morgan');
const app = express();
const tarefasRoutes = require('./routes/tarefasRoutes');

app.use(express.json());
app.use(morgan('dev'));
app.use('/tarefas', tarefasRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada.' });
});

app.listen(3004, () => {
  console.log('API rodando na porta 3004');
});