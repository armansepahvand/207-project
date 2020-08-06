const mongoose = require('mongoose');
<<<<<<< HEAD
// const url = "mongodb://localhost:27017/travelexperts";
const url = "mongodb+srv://ThunderstormPantherBearAdmin:<ThunderstormPantherBear>@thunderstormpantherbear.wmwvd.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
=======
//const url = "mongodb://localhost:27017/travelexperts";
const url = "mongodb+srv://ThunderstormPantherBearAdmin:ThunderstormPantherBear@thunderstormpantherbear.wmwvd.azure.mongodb.net/travelexperts?retryWrites=true&w=majority"
>>>>>>> 6e493890ed26dafeea261c4630691fc9391ac8ee

// Set up a mongoose connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose