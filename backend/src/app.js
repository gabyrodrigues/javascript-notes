let express = require('express');
let logger = require('morgan');

require ('./config/database');

let usersRouter = require('./app/routes/users');
let notesRouter = require('./app/routes/notes');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;