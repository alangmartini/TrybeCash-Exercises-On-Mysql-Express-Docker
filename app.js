const express = require('express');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();

app.use(express.json());
app.use('/tasks', tasksRoutes);

app.get('/', () => console.log('funcionando'));

module.exports = app;
