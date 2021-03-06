// Created by Crystal, edited by other members
const mongoose = require("mongoose");
//const url = "mongodb://localhost:27017/travelexperts";
const url =
  "mongodb+srv://ThunderstormPantherBearAdmin:ThunderstormPantherBear@thunderstormpantherbear.wmwvd.azure.mongodb.net/travelexperts?retryWrites=true&w=majority";

// Set up a mongoose connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

mongoose.set("useCreateIndex", true);

module.exports = mongoose;
