const { Schema, model } = require("mongoose");

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
    notes: {
      type: String,
    },
    injuryReport: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Athlete = model("Athlete", athleteSchema);

module.exports = Athlete;
