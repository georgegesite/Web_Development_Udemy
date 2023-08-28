//jshint esersion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//Connection URL
const url = 'mongodb://127.0.0.1:27017';

//Database Name
const dbName = 'fruitsDB';

//Create a new Mongo Client
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err)
{
    assert.equal(null, err);
    console.log("Connected successfully to the server");
    const db = client.db(dbName);

    client.close();
});