const { Schema } = require("mongoose");

const wodSchema = new Schema({
  _id: {
    type: ID,
    required: true,
  },
  date: {
    type: Date,
  },
  performanceType: {
    type: String,
  },
  skill: {
    type: String,
  },
  result: {
    type: String,
  },
});

module.exports = wodSchema;
