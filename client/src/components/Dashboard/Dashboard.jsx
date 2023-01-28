import React from "react";
import { Container, CardColumns, Card, Button, } from "react-bootstrap";

import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../../utils/queries";
import { Link } from "react-router-dom";
//import Auth from "../../utils/auth";

import "./dashboard.css";

const Dashboard = (refetch) => {
  const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || {};


  //if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div refetch={refetch}>
      <Container>
        <h1 className='text-center'>Current Athletes</h1>
        <h2 className='text-center'>
          {userData.currentAthletes.length
            ? `You have ${userData.currentAthletes.length} ${
                userData.currentAthletes.length === 1 ? "athlete" : "athletes"
              }:`
            : "You have no current athletes!"}
        </h2>
        <CardColumns>
          {userData.currentAthletes.map((athlete) => {
            return (
              <Card key={athlete._id} border="dark" refetch={refetch}>
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
    </div>
  );
};

export default Dashboard;
