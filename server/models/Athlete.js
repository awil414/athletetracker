const { Schema, model } = require("mongoose");

const wodSchema = require("./Wod");

const athleteSchema = new Schema(
  {
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
    image: {
      type: String,
    },
    notes: {
      type: String,
    },
    injuryReport: {
      type: String,
    },
    wods: [wodSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Athlete = model("Athlete", athleteSchema);

module.exports = Athlete;
