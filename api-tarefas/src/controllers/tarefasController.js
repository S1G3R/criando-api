const service = require('../services/tarefasService');
const { log } = require('../utils/logger');

exports.getAll = (req, res) => {
  const filtro = req.query.concluida === 'true' ? true : req.query.concluida === 'false' ? false : undefined;
  res.json(service.listarTarefas(filtro));
};

exports.getById = (req, res) => {
  const tarefa = service.encontrarTarefa(req.params.id);
  if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  res.json(tarefa);
};

exports.create = (req, res) => {
  const nova = service.adicionarTarefa(req.body);
  log('Tarefa criada com sucesso.');
  res.status(201).json(nova);
};

exports.update = (req, res) => {
  const atualizada = service.atualizarTarefa(req.params.id, req.body);
  if (!atualizada) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  res.json(atualizada);
};

exports.delete = (req, res) => {
  const removida = service.deletarTarefa(req.params.id);
  if (!removida) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  log('Tarefa deletada.');
  res.json({ message: 'Tarefa removida com sucesso.' });
};

exports.concluir = (req, res) => {
  const concluida = service.concluirTarefa(req.params.id);
  if (!concluida) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  res.json(concluida);
};