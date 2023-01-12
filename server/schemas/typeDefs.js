const { gql } = require('apollo-server-express');

// DO WE NEED WOD IN HERE AT ALL???   ADD WOD? REMOVE WOD? I DON"T THINK SO????
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
    wods: [Wod]
}
type Wod {
    _id: ID
    wodDate: Date
    type: String
    name: String
    description: String
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
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
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
    editAthlete(
        firstName: String
        lastName: String
        email: String
        phoneNumber: String
        image: String
        notes: String
        injuryReport: String
        wods: [String]
    ): Athlete
    removeAthlete(_id: ID): User
}   
`
module.exports = typeDefs;
