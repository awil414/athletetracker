const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models/user");
const { signToken } = require("../utils/auth");
const { Athlete } = require("../models/Athlete");

const resolvers = {
  Query: {
    // query to GET current user, returns user's id from context
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // query to GET all of user's athletes
    athletes: async (parent, args, context) => {
      try {
        const allAthletes = await Athlete.findAll({}, context);
        return allAthletes;
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    },

    // query to GET one athlete
    singleAthlete: async (parent, args, {id}, context) => {
      try {
        const athleteData = await Athlete.findById(id, context);
        return athleteData;
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    },
  },
};
module.exports = resolvers;
