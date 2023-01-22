import * as React from "react";
import { useParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";
import { Link } from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Dashboard() {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  return (
    <ThemeProvider className="dashboard" theme={theme}>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main style={{ background: "black" }} className="dashboard">
        {/* Hero unit */}
        <Box
          style={{ background: "black" }}
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              style={{ color: "gray" }}
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Current Athletes
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {/* {userData.athletes.map((athlete) => {
            return ( */}
            {cards.map((card) => (
              // <Grid item key={athlete._id} xs={12} sm={6} md={4}>
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Athlete Name
                    </Typography>
                    <Typography>
                      <ul>
                        <li>Email</li>
                        <li>Status</li>
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Link to={`/athlete/${athlete._id}`} style={{ textDecoration: 'none' }}> */}
                    <Link to="/athlete" style={{ textDecoration: "none" }}>
                      <Button size="small">View Athlete</Button>
                    </Link>
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
