const { Schema } = require("mongoose");

const wodSchema = require("./Wod");

const athleteSchema = new Schema({
  _id: {
    type: ID,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  },
  injuryReport: {
    type: String,
  },
  // wods: [wodSchema]
  wods: [
    {
      //This will contain the input fields needed
    },
  ],
});

module.exports = athleteSchema;
