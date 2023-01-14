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
    image: String
    notes: String
    injuryReport: String
    wods: [Wod]
  }

  type Wod {
    wodId: ID
    wodDate: Date
    performanceType: String
    skill: String
    result: String
  }

  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
    athletes: [Athlete]
    singleAthlete(_id: ID!): Athlete
  }

  input AthleteInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: Int!
    image: String
    notes: String
    injuryReport: String
    wods: [Wod]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAthlete(athlete: AthleteInput): Athlete
    updateAthlete(_id: ID, athleteData: AthleteInput): Athlete
    removeAthlete(_id: ID): User
  }
`;
module.exports = typeDefs;
