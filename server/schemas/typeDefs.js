const { gql } = require('apollo-server-express');

// IN MUTATIONS: ADD WOD? REMOVE WOD? ADD SKILLS? REMOVE SKILLS?
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
    notes: String
    injuryReport: String
    wods: [Wod]
}
type Wod {
    -id: ID
    wodDate: String
    skills: [Skill]
}
type Skill {
    _id: ID
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
        phoneNumber: String
        notes: String
        injuryReport: String
        wods: [String]
    ): Athlete
    removeAthlete(_id: ID): User
}   
`
module.exports = typeDefs;
