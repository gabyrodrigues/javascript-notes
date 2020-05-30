const express = require('express');
const routes = require('./app/routes');

const app = express();

let usersRouter = require('./app/routes/users');
let notesRouter = require('./app/routes/notes');

app.use(express.json());

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;