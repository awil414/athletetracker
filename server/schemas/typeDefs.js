const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    currentAthletes: [Athlete]
  }
  type Athlete {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: Int!
    notes: String
    injuryReport: String
  }

  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
    athletes: [Athlete]
    singleAthlete(athleteId: ID!): Athlete
  }

  input AthleteInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: Int!
    notes: String
    injuryReport: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAthlete(athlete: AthleteInput): Athlete
    updateAthlete(athleteId: ID!, athlete: AthleteInput): Athlete
    removeAthlete(athleteId: ID): User
  }
`;
module.exports = typeDefs;
// line 43 changed from athleteData to athlete
