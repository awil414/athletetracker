const { gql } = require('apollo-server-express');

// REMOVE ATHLETE goes to User? ADD ATHLETE goes to Athlete? not sure??????

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
    wods: {
        _id: ID
        wodDate: Date
        performanceType: String
        skill: String
        result: String
    }
}
    
type Auth {
    token: ID
    user: User
}
type Query {
    me: User
    athletes: [Athlete]
    athlete(_id: ID!): Athlete
}

input AddAthleteInput {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: Int!
    image: String
    notes: String
    injuryReport: String
    wods: [String]
}

type Mutation {
    addUser(
        username: String! 
        email: String! 
        password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addAthlete(athlete: AddAthleteInput): Athlete
    updateAthlete(
        firstName: String
        lastName: String
        email: String
        phoneNumber: Int
        image: String
        notes: String
        injuryReport: String
        wods: [String]
    ): Athlete
    removeAthlete(_id: ID): User
}   
`
module.exports = typeDefs;
