const express = require('express');
const routes = express.Router();

// User
const UserController = require('./controllers/UserController');

routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;