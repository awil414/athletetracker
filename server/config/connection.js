const mongoose = require("mongoose");

//Need to connect to MongoDB
mongoose.connect();

module.exports = mongoose.connection;
