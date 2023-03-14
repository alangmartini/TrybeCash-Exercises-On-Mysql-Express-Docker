const express = require('express');
const { insert, update } = require('../db/tasksDB');

const router = express.Router();

const validateNomeDescricao = (req, res, next) => {
  const task = req.body;

  const { nome, descricao } = task;

  if (!nome || !descricao) {
    res.status(400).json({ message: `Algo deu errado` });
    return;
  }

  next();
};

router.post('/', validateNomeDescricao, async (req, res) => {
  const task = req.body;

  try {
    const insertId = await insert(task, 1);

    if (!insertId) {
      throw new Error('Algo deu errado');
    }

    res.status(201).json({ message: 'Deu bom' });
    return;
  } catch (e) {
    console.log('error é', e);
    res.status(400).json({ message: `Algo deu errado ${e}` });
  }
});

router.put('/:id', (req, res) => {
  res.status(400).json({ message: 'O endpoint PUT /tasks/:id ainda não foi implementado' });
});

router.delete('/:id', (req, res) => {
  res.status(400).json({ message: 'O endpoint DELETE /tasks/:id ainda não foi implementado' });
});

router.get('/', (req, res) => {
  res.status(400).json({ message: 'O endpoint GET /tasks ainda não foi implementado' });
});

router.get('/:id', (req, res) => {
  res.status(400).json({ message: 'O endpoint GET /tasks/:id ainda não foi implementado' });
});

module.exports = router;
