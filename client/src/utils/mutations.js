import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_ATHLETE = gql`
  mutation addAthlete($athlete: AthleteInput) {
    addAthlete(athlete: $athlete) {
      _id
      firstName
      lastName
      email
      phoneNumber
      notes
      injuryReport
    }
  }
`;

export const REMOVE_ATHLETE = gql`
  mutation removeAthlete($athleteId: ID!) {
    removeAthlete(athleteId: $athleteId) {
      _id
      username
      email
    }
  }
`;

export const UPDATE_ATHLETE = gql`
  mutation updateAthlete($athleteId: ID, $athleteData: AthleteInput) {
    updateAthlete(athleteId: $athleteId, athleteData: $AthleteInput) {
      _id
      username
      email
      currentAthletes {
        _id
        firstName
        lastName
        email
        phoneNumber
        notes
        injuryReport
      }
    }
  }
`;
