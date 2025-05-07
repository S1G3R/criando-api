const { tarefas } = require('../database/fakeDb');
const { v4: uuidv4 } = require('uuid');

function adicionarTarefa(data) {
  const novaTarefa = { id: uuidv4(), ...data };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

function listarTarefas(filtro) {
  if (filtro) return tarefas.filter(t => t.concluida === filtro);
  return tarefas;
}

function encontrarTarefa(id) {
  return tarefas.find(t => t.id === id);
}

function atualizarTarefa(id, data) {
  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) return null;
  tarefas[index] = { ...tarefas[index], ...data };
  return tarefas[index];
}

function deletarTarefa(id) {
  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) return null;
  const removida = tarefas.splice(index, 1);
  return removida[0];
}

function concluirTarefa(id) {
  const tarefa = encontrarTarefa(id);
  if (!tarefa) return null;
  tarefa.concluida = true;
  return tarefa;
}

module.exports = {
  adicionarTarefa,
  listarTarefas,
  encontrarTarefa,
  atualizarTarefa,
  deletarTarefa,
  concluirTarefa
};