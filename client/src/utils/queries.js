import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
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

// ?????
export const GET_ATHLETES = gql`
  query getAthletes {
    athletes {
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

// ??????
export const GET_ATHLETE = gql`
  query getAthlete($athleteId: ID!) {
    athletes(athleteId: $athleteId) {
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
