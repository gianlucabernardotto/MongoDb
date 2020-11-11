var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

router.get('/actors/:cast', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    cast = req.params.cast;
    const uri = "mongodb+srv://Giangy:Gianluca@cluster0.mpo20.mongodb.net/test"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({cast:{$in:[`${cast}`]}}).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/length_year/:length/:year', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    length = parseInt(req.params.length);
    year = parseInt(req.params.year);
    const uri = "mongodb+srv://Giangy:Gianluca@cluster0.mpo20.mongodb.net/test"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({$and:[{runtime:{$gt:length }},{year:{$gt:year}}]}).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

module.exports = router;
