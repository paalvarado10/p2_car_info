const express = require('express');
const router = express.Router();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var bodyParser = require("body-parser");
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'carinfo';
const a = -1;










 function findAll (db, query, callback) {
   // Get the documents collection
   const collection = db.collection('carros');
   // Find some documents
   collection.find({}).toArray(function(err, docs) {
     assert.equal(err, null);
     console.log("Found the following records " +docs.lenght);
     callback(docs);
   });
 }
function findCarros (db, query, callback) {
  // Get the documents collection
  const collection = db.collection('carros');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records " +docs.lenght);
    callback(docs);
  });
}


function getCarros(query, callback){
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // if(query === a){
  // 	findAll(db, query, callback);
  //  // findCarros(db, query, callback);
  // }
  findCarros(db, query, callback);

  client.close();
});
}









router.get('/', function (req, res) {
  getCarros(
  {marca: req.params.marca},
  (carros) =>{
    console.log("Entra con filtro: MARCA")
    res.send(carros);
  });
});



/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.json([{"id":"1","marca":"Audi","anio":"2018","pais":"Alemania","modelo":"R8","linea":"V10 plus","traccion":"AWD","puertas":"2","cilindros":"10","motor":"5.2", "valvulas por cilindro":"4", "combustible":"gasolina premium", "mpg":"15", "transmicion":"automatica", "hp":"610", "aceleracion":"2.7", "pesoKG":"3605", "torquelbft":"413", "velocidadmaxkm":"330", "precio":"800000000","imagen":"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/CAC70AUC171A021001.jpg"}
    , {"id":"2","marca":"Volkswagen","anio":"2018","pais":"Alemania","modelo":"gol","linea":"trendline","traccion":"delantera","puertas":"4","cilindros":"4","motor":"1.6", "valvulas por cilindro":"2", "combustible":"gasolina", "mpg":"30", "transmicion":"mecanica", "hp":"100", "aceleracion":"10.7", "pesoKG":"910", "torquelbft":"120", "velocidadmaxkm":"220", "precio":"35000000","imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoXoHwfaysjjyvco0lJaALJBeTlzx2PDkW9LS6UnWQhU09oGuDg"}
    ]);
});*/

module.exports = router;