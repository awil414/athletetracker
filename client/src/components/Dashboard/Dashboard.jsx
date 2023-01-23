// import * as React from "react";
// import { useParams } from "react-router-dom";
// // import AppBar from "@mui/material/AppBar";
// // import Button from "@mui/material/Button";
// // import Card from "@mui/material/Card";
// // import CardActions from "@mui/material/CardActions";
// // import CardContent from "@mui/material/CardContent";
// // import CssBaseline from "@mui/material/CssBaseline";
// // import Grid from "@mui/material/Grid";
// // import Stack from "@mui/material/Stack";
// // import Box from "@mui/material/Box";
// // import Typography from "@mui/material/Typography";
// // import Container from "@mui/material/Container";
// // import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useQuery } from "@apollo/client";
// import Auth from "../../utils/auth";
// import { QUERY_ME } from "../../utils/queries";
// import { Link } from "react-router-dom";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

// export default function Dashboard() {
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(QUERY_ME);
//   const userData = data?.me || {};

//   // if data isn't here yet, say so
//   if (loading) {
//     return <h2>LOADING...</h2>;
//   }

//   const token = Auth.loggedIn() ? Auth.getToken() : null;

//   //
//     // <ThemeProvider className="dashboard" theme={theme}>
//     //   <CssBaseline />
//     //   <AppBar position="relative"></AppBar>
//     //   <main style={{ background: "black" }} className="dashboard">
//     //     {/* Hero unit */}
//     //     <Box
//     //       style={{ background: "black" }}
//     //       sx={{
//     //         bgcolor: "background.paper",
//     //         pt: 8,
//     //         pb: 2,
//     //       }}
//     //     >
//     //       <Container maxWidth="sm">
//     //         <Typography
//     //           style={{ color: "gray" }}
//     //           component="h1"
//     //           variant="h2"
//     //           align="center"
//     //           color="text.primary"
//     //           gutterBottom
//     //         >
//     //           Current Athletes
//     //         </Typography>
//     //         <Stack
//     //           sx={{ pt: 4 }}
//     //           direction="row"
//     //           spacing={2}
//     //           justifyContent="center"
//     //         ></Stack>
//     //       </Container>
//     //     </Box>
//     //     <Container sx={{ py: 8 }} maxWidth="md">
//     //       {/* End hero unit */}
//     //       <Grid container spacing={2}>
//     //         {/* {userData.athletes.map((athlete) => {
//     //         return ( */}
//     //         {cards.map((card) => (
//     //           // <Grid item key={athlete._id} xs={12} sm={6} md={4}>
//     //           <Grid item key={card} xs={12} sm={6} md={4}>
//     //             <Card
//     //               sx={{
//     //                 height: "100%",
//     //                 display: "flex",
//     //                 flexDirection: "column",
//     //               }}
//     //             >
//     //               <CardContent sx={{ flexGrow: 1 }}>
//     //                 <Typography gutterBottom variant="h5" component="h2">
//     //                   Athlete Name
//     //                 </Typography>
//     //                 <Typography>
//     //                   <ul>
//     //                     <li>Email</li>
//     //                     <li>Status</li>
//     //                   </ul>
//     //                 </Typography>
//     //               </CardContent>
//     //               <CardActions>
//     //                 {/* <Link to={`/athlete/${athlete._id}`} style={{ textDecoration: 'none' }}> */}
//     //                 <Link to="/athlete" style={{ textDecoration: "none" }}>
//     //                   <Button size="small">View Athlete</Button>
//     //                 </Link>
//     //               </CardActions>
//     //             </Card>
//     //           </Grid>
//     //         ))}
//     //       </Grid>
//     //     </Container>
//     //   </main>
//     // </ThemeProvider>
// //   );
// // }

import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from 'react-router-dom';

import { useMutation, useQuery } from "@apollo/client";

 import { QUERY_GET_ATHLETES, QUERY_ME } from "../../utils/queries";

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
      {/* <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Current Athletes</h1>
        </Container>
      </Jumbotron> */}
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
                  <Card.Title>{athlete.firstName} {athlete.lastName}</Card.Title>
                  <Card.Text>{athlete.email} {athlete.injuryReport}</Card.Text>
                  <Link
                    to={`/athletes/${athlete._id}`}
                    className="btn-block btn-danger"
                  //  This should take user to single athlete
                  >
                    View this athlete
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