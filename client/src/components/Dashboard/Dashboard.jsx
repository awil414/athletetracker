// ?????????????????
// Hi Tierney & Bobbi!!
// Time permitting -- please see lines 24-27, 47-68, 118, 128, 131, 146-147, 153-154, 159-161

import * as React from "react";
import { Navigate, useParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";
import { ADD_ATHLETE } from "../../utils/mutations";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Dashboard() {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME);
  const [addAthlete, { error, athleteData }] = useMutation(ADD_ATHLETE);
  const userData = data?.me || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn()) {
    return <Navigate to="/dashboard" />;
  }

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  // ????? CREATE FUNCTION TO handleADDATHLETE ????
  // ???? MAKE A FORM OR MODAL ?????
  const handleAddAthlete = () => {};
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Remove me?
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Athletes
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                // onClick={() => handleAddAthlete(athlete.athleteId)}
              >
                Create New Athlete
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {userData.Dashboard.map((athlete) => {
            return ( */}
            {cards.map((card) => (
              // <Grid item key={athlete.athleteId} xs={12} sm={6} md={4}>
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "10%",
                    }}
                    // src={athlete.image}
                    // alt={`Photo of ${athlete.firstName}`}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {/* ????? CAN I DO THIS DOUBLE DOT REFERENCE ???? */}
                      {/* {athlete.firstName.LastName} */}
                      Athlete Name
                    </Typography>
                    <Typography>
                      <ul>
                        {/* <li>{athlete.phoneNumber}</li>
                        <li>{athlete.email}</li>
                        <li>{athlete.injuryReport}</li> */}
                        <li>Phone Number</li>
                        <li>Email</li>
                        <li>Status</li>
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Go to Athlete</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
