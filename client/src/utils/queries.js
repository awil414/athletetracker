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
        notes
        injuryReport
      }
    }
  }
`;

// ?????
export const QUERY_GET_ATHLETES = gql`
  query getAthletes {
    athletes {
      _id
      firstName
      lastName
      email
      notes
      injuryReport
    }
  }
`;

// ??????
export const QUERY_SINGLE_ATHLETE = gql`
  query singleAthlete($athleteId: ID!) {
    athletes(athleteId: $athleteId) {
      _id
      firstName
      lastName
      email
      notes
      injuryReport
    }
  }
`;
