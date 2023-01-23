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
  mutation addAthlete($athlete: AthleteInput!) {
    addAthlete(athlete: $athlete) {
      _id
      firstName
      lastName
      email
      notes
      injuryReport
    }
  }
`;

export const REMOVE_ATHLETE = gql`
  mutation removeAthlete($_id: ID!) {
    removeAthlete(_id: $_id) {
      _id
      username
      email
      currentAthletes {
        _id
        firstName
        lastName
        email
        notes
        injuryReport
      }
    }
  }
`;

export const UPDATE_ATHLETE = gql`
  mutation updateAthlete($_id: ID, $athleteData: AthleteInput) {
    updateAthlete(_id: $_id, athleteData: $AthleteInput) {
      _id
      username
      email
      currentAthletes {
        _id
        firstName
        lastName
        email
        notes
        injuryReport
      }
    }
  }
`;
