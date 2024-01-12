const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

  const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-awvqupm-shard-00-00.7jmi0wi.mongodb.net:27017,ac-awvqupm-shard-00-01.7jmi0wi.mongodb.net:27017,ac-awvqupm-shard-00-02.7jmi0wi.mongodb.net:27017/?ssl=true&replicaSet=atlas-n21kcw-shard-0&authSource=admin&retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("DataBase Connected");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("DataBase is not connected");
  });

  mongoose.connection.on("error", () => {
    console.log("error when connecting database to the server", error.message);
  })
}

module.exports = Connection;
