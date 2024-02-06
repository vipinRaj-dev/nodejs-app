import express from "express";
import bodyParser from "body-parser";

import db from "./mongoC.js";

const port = 4000;
const app = express();

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

app.post("/addUser", async (req, res) => {
  let collection = await db.collection("users");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

app.get("/getUsers", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection
    .find({})

    .toArray();
  res.send(results).status(200);
});


app.listen(port, function () {
  console.log("Server is listening at port:" + port);
});



