const { Schema } = require("mongoose");

const wodSchema = new Schema({
  _id: {
    type: ID,
    required: true,
  },
  date: {
    type: Date,
  },
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = wodSchema;
