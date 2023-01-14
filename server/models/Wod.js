const { Schema } = require("mongoose");

const wodSchema = new Schema(
  {
    wodId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = wodSchema;
