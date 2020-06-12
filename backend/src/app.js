let express = require('express');
let path = require('path');
let logger = require('morgan');

require ('./config/database');

let cors = require('cors');

let usersRouter = require('./app/routes/users');
let notesRouter = require('./app/routes/notes');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); //habilitando o cors

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;