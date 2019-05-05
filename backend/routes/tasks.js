var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = require('./uriString').uri;
const client = new MongoClient(uri, { useNewUrlParser: true });
const ObjectId = require("mongodb").ObjectID;


// books //
router.post('/books', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("Books");
        collection.insertOne(req.body, (error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(req.body);
        });
    });
});

router.get('/books', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("Books");
        collection.find({}).toArray((error, result) => {
            res.send(result);
        });
    });
});

router.get('/books/:id', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("Books");
        collection.findOne({ "_id": new ObjectId(req.params.id) }, (error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });
});

router.put('/books/:id', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("Books");
        let newvalues = { $set: { title: req.body.title, author: req.body.author, chapters: req.body.chapters, status: req.body.status } };
        let id = { "_id": new ObjectId(req.params.id)}
        collection.updateOne(id, newvalues, (error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });
});

router.delete('/books/:id', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("Books");
        let id = { "_id": new ObjectId(req.params.id)}
        collection.deleteOne(id, (error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });
});

// users //
router.post('/users', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("users");
        collection.insert(req.body, (error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });
});

router.get('/users', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("users");
        collection.find({}).toArray((error, result) => {
            res.send(result);
        });
    });
});

router.get('/users/:id', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("users");
        collection.findOne({ "_id": new ObjectId(req.params.id) }, (error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });
});

router.put('/users/:id', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("users");
        let newvalues = { $set: { username: req.body.username, password: req.body.password, description: req.body.description } };
        let id = { "_id": new ObjectId(req.params.id)}
        collection.updateOne(id, newvalues, (error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });
});

router.delete('/users/:id', function(req, res, next){
    client.connect(err => {
        let collection = client.db("MEANsharingPlatform").collection("users");
        let id = { "_id": new ObjectId(req.params.id)}
        collection.deleteOne(id, (error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });
});

module.exports = router;
