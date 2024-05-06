// var express = require('express');
// var router = express.Router();

const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

//MAPb9zkKjKTd8y0X

// const username = "findmyroomie33";
// const password = encodeURIComponent("jRYB69s7zhEN4QqQ");

// mongoose.connect(`mongodb+srv://findmyroomie33:${password}@cluster01101.6hgzj0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01101`);

//mongoose.connect("mongodb://127.0.0.1:27017/FMRDB");

mongoose.connect("mongodb://u8ib0kpf6kbmslemuozt:xv9vQevh4ccaIM5CiWD@b3ljl2hp3qlh7ae5tfhz-mongodb.services.clever-cloud.com:2796/b3ljl2hp3qlh7ae5tfhz");


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://findmyroomie33:9Ev8vqJt8CG4diIp@nittbase.v7qh5wm.mongodb.net/?retryWrites=true&w=majority&appName=NITTbase";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  gender: String,
  mobileNumber: Number
});

const formDataSchema = mongoose.Schema({
  name: String,
  email: String,
  mobileNumber: String,
  gender: String,
  perstate: String,
  corstate: String,
  Languages:String,
  dept: String,
  clean: String,
  loud: String,
  sleep: String,
  lights: String,
  friend: String,
  interests: String,
  review: String
});


// Create a model based on the form data schema
const FormDataModel = mongoose.model("FormData", formDataSchema);


userSchema.plugin(plm);

const userModel = mongoose.model("user", userSchema);

module.exports={userModel,FormDataModel};
