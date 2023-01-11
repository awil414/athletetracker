const { Schema } = require("mongoose");

const wodSchema = require("./Wod");

const athleteSchema = new Schema({
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
  programs: [
    {
      type: String,
    },
  ],
});

module.exports = athleteSchema;
