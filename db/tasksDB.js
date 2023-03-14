const connection = require('./connection');

const insert = async (task) => {
  const [{ insertId }] = await connection.execute(`
  INSERT INTO tasks (nome, descricao) VALUES (?, ?)
  `, [task.nome, task.descricao]);

  return insertId;
};

const update = async (task, id) => {
  const [result] = await connection.execute(`
  UPDATE tasks SET nome = ?, descricao = ? WHERE id = ? 
  `, [task.nome, task.descricao, id]);

  return result;
};

const remove = async (id) => {
  const [result] = await connection.execute(`
  DELETE FROM tasks WHERE id = ? 
  `, [id]);

  return result;
};
const findAll = async () => {
  const [result] = await connection.execute(`
    SELECT * FROM tasks;
  `);

  return result;
};
const findById = async (id) => {
  const [result] = await connection.execute(`
    SELECT * FROM tasks WHERE id = ?
  `, [id]);

  return result;
};

module.exports = {
  insert,
  update,
  remove,
  findAll,
  findById,
};