const { gql } = require('apollo-server-express');


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
    programs: [String]
}
`
module.exports = typeDefs;
