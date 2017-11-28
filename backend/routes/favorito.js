'user strict'

var express = require('express');

var FavoritoController = require('../controllers/favorito');

var api = express.Router();

api.get('/prueba/:name?',FavoritoController.prueba);
api.get('/favorito/:id?',FavoritoController.getFavorito);
api.post('/favorito',FavoritoController.saveFavorito)
api.put('/favorito/:id',FavoritoController.updateFavorito)
api.delete('/favorito/:id?',FavoritoController.deleteFavorito)

api.get('/favoritos',FavoritoController.getFavoritos)

module.exports = api;