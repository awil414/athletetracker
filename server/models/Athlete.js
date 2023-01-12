const { Schema, model } = require("mongoose");

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
  image: {
    type: String,
  },
  notes: {
    type: String,
  },
  injuryReport: {
    type: String,
  },
  wods: [
    {
      type: Schema.Types.ObjectId,
      ref: "Wod",
    },
  ],
});

const Athlete = model("Athlete", athleteSchema);

module.exports = Athlete;
