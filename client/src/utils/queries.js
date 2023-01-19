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
        image
        notes
        injuryReport
        wods
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
      image
      notes
      injuryReport
      wods
    }
  }
`;

// ??????
export const GET_ATHLETE = gql`
  query getAthlete($_id: ID!) {
    athlete(_id: $_id) {
      _id
      firstName
      lastName
      email
      phoneNumber
      image
      notes
      injuryReport
      wods
    }
  }
`;
