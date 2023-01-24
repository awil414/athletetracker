const mongoose = require("mongoose");

//Need to connect to MongoDB -- use athlete tracker or change to match
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/athletetracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
