import React from "react";
import { Container, CardColumns, Card, Button } from "react-bootstrap";

import { useMutation, useQuery } from "@apollo/client";

import { GET_ATHLETES, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || [];

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Container>
        <h1>Current Athletes</h1>
        <h2>
          {userData.currentAthletes.length
            ? `Viewing ${userData.currentAthletes.length} current ${
                userData.currentAthletes.length === 1 ? "athlete" : "athletes"
              }:`
            : "You have no current athletes!"}
        </h2>
        <CardColumns>
          {userData.currentAthletes.map((athlete) => {
            return (
              <Card key={athlete._id} border="dark">
                <Card.Body>
                  <Card.Title>
                    {athlete.firstName} {athlete.lastName}
                  </Card.Title>
                  <Card.Text>
                    {athlete.email} {athlete.injuryReport}
                  </Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    //  This should take user to single athlete
                  >
                    View this athlete
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Dashboard;
