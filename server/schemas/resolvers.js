const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
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
        
      }

    },
    

};
    module.exports = resolvers;