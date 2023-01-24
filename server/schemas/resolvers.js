// ???? QUESTION -- we set these up first, do the components in src have to match??
// ???? Specifically - does line 17 need to be Dashboard? Or maybe we need
// to change Dashboard component in src to currentAthletes?

const { AuthenticationError } = require("apollo-server-express");
const { User, Athlete } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // populate the athletes that belong to specifc user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("currentAthletes");
        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // query to GET all of user's athletes: might not need for this functionality. More for admin?
    athletes: async (parent, args, context) => {
      try {
        const allAthletes = await Athlete.find();
        return allAthletes;
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    },

    // query to GET one athlete:
    singleAthlete: async (parent, { athleteId }, context) => {
      try {
        console.log(athleteId);
        const athleteData = await Athlete.findById(athleteId);
        console.log(athleteData);
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
      console.log("finally made it");
      console.log({ username, email, password });
      // Create the user
      const user = await User.create({ username, email, password });
      // Immediately assign a JSON WebToken and log the user in
      console.log(user);
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

    // Creating an athlete with athlete model then adding the new Athlete to currentAthlete array which updates the User
    addAthlete: async (parent, { athlete }, context) => {
      console.log("addAthlete mutation");
      console.log(athlete);
      if (context.user) {
        // Create the athlete

        const athleteData = await Athlete.create(athlete);
        console.log(athleteData);
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { currentAthletes: athleteData._id } },
          { new: true }
        );
        console.log(updateUser);
        return athleteData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Deleting an athlete from User's currentAthlete array
    removeAthlete: async (parent, { _id }, context) => {
      if (context.user) {
        const athleteData = await Athlete.findOneAndDelete(_id);
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { currentAthletes: athleteData._id } },
          { new: true }
        );
        return updateUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //When testing, use console logs, can allow us to see if it's mongoose or GraphQl, also the params like athleteData
    updateAthlete: async (parent, { athleteId }, context) => {
      if (context.user) {
        const athleteData = await Athlete.findOneAndUpdate(_id);
        console.log(athleteData);
        const updateUser = await User.findByIdAndUpdate(
        { _id: athleteId },
        { $set: athleteData },
        { new: true }
      );
      return athleteData;
    }
    throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
