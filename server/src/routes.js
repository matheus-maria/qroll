const express = require('express');
const routes = express.Router();

// User
const UserController = require('./controllers/UserController');

routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);
routes.post('/user/validate', UserController.validate);


// Call
const CallController = require('./controllers/CallController');

routes.get('/call', CallController.index);
routes.get('/call/:id', CallController.show);
routes.post('/call', CallController.store);
routes.put('/call/:id', CallController.update);
routes.delete('/call/:id', CallController.delete);

// Class
const ClassController = require('./controllers/ClassController');

routes.get('/class', ClassController.index);
routes.get('/class/:userId', ClassController.show);
routes.post('/class', ClassController.store);

// Presence
const PresenceController = require('./controllers/PresenceController');

routes.get('/presence', PresenceController.index);
routes.post('/presence', PresenceController.store);

module.exports = routes;