const { AuthenticationError } = require("apollo-server-express");
const { User, Athlete } = require("../models");
const { signToken } = require("../utils/auth");


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

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
        // Create the user
        const user = await User.create({ username, email, password });
        // Immediately assign a JSON WebToken and log the user in
        const token = signToken(user);
        // Return an `Auth` object that consists of the signed token and user's info
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError("No user found with this email address");
        }
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
        // If email and password are correct, sign user into the application with a JWT
        const token = signToken(user);
        // Return an `Auth` object that consists of the signed token and user's info
        return { token, user };
      },
  }
};
module.exports = resolvers;
