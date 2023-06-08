const mongodb = require("mongodb").MongoClient
const url = "mongodb://127.0.0.1:27017"
const client = new mongodb(url);
const localDB = client.db("demoDB");
const demoCollection = localDB.collection("user");
demoCollection.find({}).toArray().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}); 