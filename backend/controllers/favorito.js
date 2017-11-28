//? parametro opcional
"use strict";

var Favorito = require('../models/favorito');

function prueba(req, res) {

    if (req.params.name) {
        var nombre = req.params.name;
    } else {
        var nombre = "Sin Nombre";
    }
    res.status(200).send({
        data: [1, 2, 3, 4, 5],
        message: "Respuesta de prueba",
        name: nombre
    });
}

function getFavorito(req, res) {
    var favoritoId = req.params.id;
    console.log(" INFO: getFavorito:" + favoritoId);

    Favorito.findById(favoritoId, (err, favorito) => {
        if (err) {
            res.status(500).send({message: 'Error al obtener favorito.'});
        }else{
            if (!favorito) {
                res.status(404).send({message: 'No se encontro el favorito.'});
            }else{
                res.status(200).send({favorito});
            }
        }
    });
}

function getFavoritos(req, res) {
    console.log(" INFO: getFavoritos:");

    Favorito.find({}).sort('_id').exec((err, favoritos) => {
        if (err) {
            res.status(500).send({message: 'Error al obtener favorito.'});
        }else{
            if (!favoritos) {
                res.status(404).send({message: 'No hay favoritos'});
            }else{
                res.status(200).send({favoritos})

            }
        }
    });
}

function saveFavorito(req, res) {
    var favorito = new Favorito();

    var params = req.body;

    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;


    favorito.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({message: 'Error al guardar favorito.', favorito: params, save: false})
        } else {
            res.status(200).send({favorito: favoritoStored})
        }
    });

}

function updateFavorito(req, res) {
    var favoritoId = req.params.id; //params GET
    var update = req.body; //data POST


    Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error al actualizar favorito.'});
        }else{
            res.status(200).send({favorito: favoritoUpdated, updated: true})
        }
    });
}

function deleteFavorito(req, res) {
    var favoritoId = req.params.id;
    console.log(" INFO: detele Favorito:" + favoritoId);

    Favorito.findById(favoritoId, (err, favorito) => {
        if (err) {
            throw err;
            console.log(err);
            res.status(500).send({message: 'Error al obtener favorito.'});
        }
        if (!favorito) {
            res.status(404).send({message: 'No se encontro el favorito.'});
        }else{
            favorito.remove(err=>{
                if(err){
                    res.status(500).send({message:'Error al borrar favorito'})
                }else{
                    res.status(200).send({message:'El favorito se borro'})
                }
            });
        }
    });
}

module.exports = {
    prueba, getFavorito, getFavoritos, saveFavorito, updateFavorito, deleteFavorito
}