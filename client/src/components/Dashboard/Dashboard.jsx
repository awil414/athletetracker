import React from "react";
import { Container, CardColumns, Card, Button, } from "react-bootstrap";

import { useMutation, useQuery } from "@apollo/client";

import { GET_ATHLETES, QUERY_ME } from "../../utils/queries";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import "./dashboard.css";

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
                  <Card.Title className="input">
                    {athlete.firstName} {athlete.lastName}
                  </Card.Title>
                  <Card.Text className="input">
                    {athlete.email} 
                  </Card.Text>
                  <Card.Text className="input">
                    {athlete.injuryReport}
                  </Card.Text>
                  <Link to={`/athlete/${athlete._id}`}>
                    <Button
                      className="btn-block btn-danger"
                      //  This should take user to single athlete
                    >
                      View this athlete
                    </Button>
                  </Link>
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
