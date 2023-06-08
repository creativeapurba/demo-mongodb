const mongodb = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
const client = new mongodb(url);
const localDB = client.db("local");
const demoCollection = localDB.collection("demoCollection");
console.log(demoCollection.find({}).toArray()); 