const express = require('express');
const routes = require('./routers/index.routes');
const errorHandler = require('./middleware/errorHandler');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.use(errorHandler);

module.exports=app